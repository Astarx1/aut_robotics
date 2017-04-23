/* Made by Romain
 * Topic suscribed :
 * 		- MapMetaDataConstPtr map_data
 * 		- OccupancyGridConstPtr msg
 */

#include <vector>
#include <cmath>
#include "mPoint.h"

#include <ros/ros.h>
#include <opencv2/opencv.hpp>
#include <opencv2/core/core.hpp>
#include <opencv2/highgui/highgui.hpp>

#include <nav_msgs/OccupancyGrid.h>
#include <nav_msgs/MapMetaData.h>
#include <geometry_msgs/Pose.h>
#include <std_msgs/Float32.h>

#define FREE 0xFF
#define UNKNOWN 0x80
#define OCCUPIED 0x00

#define WIN_SIZE 800
#define MAP_RESOLUTION 0.025
#define SIGNAL_MAP_SIZE 2048

#define DISTANCE_NEW_POINTS 1
#define DISTANCE_MIN_NEW_POINTS 1
#define DISTANCE_ARRIVEE 0.3

#define INF 8000000

int pceil (float a) {
	int b = 0;
	if (a >= 0)
		while (b < a) b++;
	else 
		while (b > a) b--;
	return b;
}

int max (int a, int b) {
	return a > b ? a : b;
}

int min (int a, int b) {
	return a < b ? a : b;
}

class Mapping_simple {
	protected:
		ros::NodeHandle nh_;
		ros::Subscriber map_data_topic, map_topic, signal_topic, odom_topic;
		ros::Publisher twist_publish;
		nav_msgs::MapMetaData infos;
		
		cv::Mat_<uint8_t> erodedMap, signalMap, passagesMap;
		cv::Mat_<cv::Vec3b> coloredMap, coloredSignalMap, coloredPassagesMap;
		geometry_msgs::Pose pose;
		
		int minx, miny, maxx, maxy;
		int initial_x, initial_y;
		int prev_size_x, prev_size_y;
		bool size_changed, map_initialized, resize;
		cv::Mat_<cv::Vec3b> old_resized_signal;
		
		float x,y;
		
		std::vector <mPoint> passages;
		int index_objective;
		
		float min_distance;
		
		void Map_callback(const nav_msgs::OccupancyGrid msg) {
			//ROS_INFO("Maj Mapping");
			cv::Mat_<uint8_t> BeforeErosion = cv::Mat_<uint8_t>(msg.info.height, msg.info.width, 0xFF);
			maxx = msg.info.width; maxy = msg.info.height; 
			minx = 0; miny = 0;
						
			for (unsigned int j=0;j < msg.info.height;j++) {
				for (unsigned int i=0;i < msg.info.width;i++) {
					int8_t v = msg.data[j*infos.width + i];
					switch (v) {
						case 0: 
							BeforeErosion(j,i) = FREE; 
							break;
						case 100: 
							float y;
							if ((y = hypot((pose.position.x-msg.info.origin.position.x)/msg.info.resolution,(pose.position.y-msg.info.origin.position.y)/msg.info.resolution)) < min_distance)
								min_distance = y;
							BeforeErosion(j,i) = OCCUPIED; 
							break;
						case -1: 
						default:
							BeforeErosion(j,i) = UNKNOWN; 
							break;
					}
					if (BeforeErosion(j,i) != UNKNOWN) {
						minx = min(minx,i);
						miny = min(miny,j);
						maxx = max(maxx,i);
						maxy = max(maxy,j);
					}
				}
			}	 
			
			int erosion_type = cv::MORPH_RECT ;
			int erosion_size = 2;
			cv::Mat element = cv::getStructuringElement(erosion_type,
					cv::Size(2*erosion_size+1,2*erosion_size+1),
					cv::Point( erosion_size, erosion_size));
			cv::erode(BeforeErosion, erodedMap, element );	
			
			unsigned int w = maxx - minx;
			unsigned int h = maxy - miny;
			
			cv::cvtColor(erodedMap, coloredMap, CV_GRAY2RGB);
			
			double ratio = w / ((double)h);
			cv::Size new_size = cv::Size(WIN_SIZE*ratio,WIN_SIZE); 
			cv::resize(coloredMap,coloredMap,new_size);
			cv::imshow( "Map", coloredMap);
			
			if (msg.info.height != prev_size_y || msg.info.width != prev_size_x) {
				prev_size_y != msg.info.height;
				prev_size_x != msg.info.width;
				size_changed = true;
			}
			if (!map_initialized) {
				map_initialized = true;
			}
		}
		
		void Signal_callback(const std_msgs::Float32ConstPtr & msg) { 
			//ROS_INFO("Update Signal - Entree");
			if (!map_initialized)
				return;
				
			int x = pceil(SIGNAL_MAP_SIZE/2) + pceil(pose.position.x/(4*MAP_RESOLUTION));
			int y = pceil(SIGNAL_MAP_SIZE/2) + initial_y + pceil(pose.position.y/(4*MAP_RESOLUTION)); 
			
			//ROS_INFO("Update Signal - Debut boucle");
			
			float val = msg->data;
			
			for (int i = x-5 >= 0 ? x-5 : 0; i <= x+5 && i < SIGNAL_MAP_SIZE; i++)
				for (int j = y-5 >= 0 ? y-5 : 0; j <= y+5 && j < SIGNAL_MAP_SIZE; j++) {
					signalMap.at<uint8_t>(i,j) = (uint8_t) pceil (val*255);	
				}
		
			ROS_INFO("Update Signal - Affichage : Position [%d, %d] - Signal %d", x, y, (uint8_t) pceil (val*255));
			
			unsigned int w = maxx - minx;
			unsigned int h = maxy - miny;
			
			cv::cvtColor(signalMap, coloredSignalMap, CV_GRAY2RGB);
			
			double ratio = w / ((double)h);
			cv::Size new_size = cv::Size(WIN_SIZE*ratio,WIN_SIZE); 
			cv::resize(coloredSignalMap,coloredSignalMap,new_size);
			cv::imshow("signalMap", coloredSignalMap);
			
			//ROS_INFO("Update Signal - Sortie");
		}
		
		void publish_turning (float angle) {
			
		}
		
		void publish_straight () {
			
		}
		 
		void Pose_out_callback(geometry_msgs::Pose msg) {
			//ROS_INFO("Maj Pose_out");
			pose = msg;
			x = msg.position.x;
			y = msg.position.y;
			bool point1 = true; bool point2 = true; bool point3 = true; bool point4 = true;
						
			for (int i = 0; i < passages.size(); ++i) {
				if (hypot(passages[i].x - (pose.position.x+DISTANCE_NEW_POINTS),passages[i].y - (pose.position.y)) < DISTANCE_MIN_NEW_POINTS)
					point1 = false;
					
				if (hypot(passages[i].x - (pose.position.x-DISTANCE_NEW_POINTS),passages[i].y - (pose.position.y)) < DISTANCE_MIN_NEW_POINTS)
					point2 = false;
					
				if (hypot(passages[i].x - (pose.position.x),passages[i].y - (pose.position.y+DISTANCE_NEW_POINTS)) < DISTANCE_MIN_NEW_POINTS)
					point3 = false;
					
				if (hypot(passages[i].x - (pose.position.x),passages[i].y - (pose.position.y-DISTANCE_NEW_POINTS)) < DISTANCE_MIN_NEW_POINTS)
					point4 = false;
			} 
			
			// ROS_INFO("Maj Pose_out - Ajout points");
			
			if (point1)  {
				passages.push_back(mPoint(pose.position.x+DISTANCE_NEW_POINTS, pose.position.y));
				cv::circle(passagesMap, cv::Point(passages[passages.size()-1].x/MAP_RESOLUTION+1024,passages[passages.size()-1].y/MAP_RESOLUTION+1024), DISTANCE_MIN_NEW_POINTS/(2*MAP_RESOLUTION), 255);
			}
			if (point2) {
				passages.push_back(mPoint(pose.position.x-DISTANCE_NEW_POINTS, pose.position.y));				
				cv::circle(passagesMap, cv::Point(passages[passages.size()-1].x/MAP_RESOLUTION+1024,passages[passages.size()-1].y/MAP_RESOLUTION+1024), DISTANCE_MIN_NEW_POINTS/(2*MAP_RESOLUTION), 255);
			}
			if (point3) {
				passages.push_back(mPoint(pose.position.x, pose.position.y+DISTANCE_NEW_POINTS));				
				cv::circle(passagesMap, cv::Point(passages[passages.size()-1].x/MAP_RESOLUTION+1024,passages[passages.size()-1].y/MAP_RESOLUTION+1024), DISTANCE_MIN_NEW_POINTS/(2*MAP_RESOLUTION), 255);
			}
			if (point4) {
				passages.push_back(mPoint(pose.position.x, pose.position.y-DISTANCE_NEW_POINTS));				
				cv::circle(passagesMap, cv::Point(passages[passages.size()-1].x/MAP_RESOLUTION+1024,passages[passages.size()-1].y/MAP_RESOLUTION+1024), DISTANCE_MIN_NEW_POINTS/(2*MAP_RESOLUTION), 255);
			}
			
			// ROS_INFO("Maj Pose_out - Affichage des objectifs");
						
			cv::cvtColor(passagesMap, coloredPassagesMap, CV_GRAY2RGB);
			
			cv::Size new_size = cv::Size(WIN_SIZE*0.7,WIN_SIZE*0.7); 
			cv::resize(coloredPassagesMap,coloredPassagesMap,new_size);
			cv::imshow("Objectifs", coloredPassagesMap);
			
			// ROS_INFO("Maj Pose_out - Maj du statut de l'objectif");
			
			double min = INF;
			double tmp; 
			
			if (hypot(passages[index_objective].x - pose.position.x, passages[index_objective].y - pose.position.y) < DISTANCE_ARRIVEE) {
				passages[index_objective].etat = 2;
				// ROS_INFO("Maj Pose_out - Objectif fini :)");
			}

			// ROS_INFO("Maj Pose_out - Changement d'objectif ?");
			
			int nb_objectifs = 0;
			
			for (int i = 0; i < passages.size(); ++i)
				if (passages[i].etat == 0)
					nb_objectifs++;
			
			//ROS_INFO("Maj Pose_out - Nombre objectifs restants : %d", nb_objectifs);
			
			if (passages[index_objective].etat == 2 && nb_objectifs > 0) {
				//ROS_INFO("Maj Pose_out - Choix du nouvel objectif");
				for (int i = 0; i < passages.size(); ++i) {
					if ((tmp = hypot(passages[i].x - pose.position.x,passages[i].y - pose.position.y) < min && hypot(passages[i].x - pose.position.x,passages[i].y - pose.position.y)) > DISTANCE_MIN_NEW_POINTS && passages[index_objective].etat == 0) {
						index_objective = i;
						ROS_INFO("Maj Pose_out - Nouvel objectif : %d -> [%f,%f]", i, passages[i].x, passages[i].y);
						passages[i].etat = 1;
					}
				} 
				passages[index_objective].etat == 1;
			}
				
			//ROS_INFO("Maj Pose_out - Sortie");
		}
		
		void Map_Data_callback(const nav_msgs::MapMetaDataConstPtr & msg) {
			ROS_INFO("Maj Map_Data");
			infos = *msg;
		}
		
	public:
		Mapping_simple() : nh_("~") {
			map_data_topic = nh_.subscribe("map_data",false,&Mapping_simple::Map_Data_callback,this);
			map_topic = nh_.subscribe("map",false,&Mapping_simple::Map_callback,this);
			signal_topic = nh_.subscribe("signal",false,&Mapping_simple::Signal_callback,this);
			odom_topic = nh_.subscribe("odom",false,&Mapping_simple::Pose_out_callback,this);
			prev_size_x, prev_size_y = 0;
			size_changed = true;
			map_initialized = false;
			resize = false;
			signalMap = cv::Mat_<uint8_t> (SIGNAL_MAP_SIZE, SIGNAL_MAP_SIZE); 
			passagesMap = cv::Mat_<uint8_t> (2048, 2048); 
			passages.push_back(mPoint(0,0));
			index_objective = 0;
		}
};

int main(int argc, char * argv[]) {
	ros::init(argc,argv,"Mapping_simple");
	Mapping_simple ogp;
	cv::namedWindow ("Map", cv::WINDOW_AUTOSIZE );
	cv::namedWindow( "signalMap", CV_WINDOW_AUTOSIZE );
	cv::namedWindow ("Objectifs", cv::WINDOW_AUTOSIZE );
	while (ros::ok()) {
		ros::spinOnce();
		if (cv::waitKey( 50 )== 'q') {
			ros::shutdown();
		}
	} 
}

