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
#include <geometry_msgs/PoseStamped.h>
#include <std_msgs/Float32.h>

#define FREE 0xFF
#define UNKNOWN 0x80
#define OCCUPIED 0x00

#define WIN_SIZE 800
#define MAP_RESOLUTION 0.025

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
		cv::Mat_<cv::Vec3b> coloredMap, coloredSignalMap;
		geometry_msgs::Pose pose;
		
		int minx, miny, maxx, maxy;
		int initial_x, initial_y;
		int prev_size_x, prev_size_y;
		bool size_changed, map_initialized, resize;
		cv::Mat_<cv::Vec3b> old_resized_signal;
		
		std::vector <mPoint> passages;
		int index_objective;
		
		float min_distance;
		
		void Map_callback(const nav_msgs::OccupancyGrid msg) {
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
			cv::namedWindow ("Map", cv::WINDOW_AUTOSIZE );
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
			if (!map_initialized)
				return;
				
			int x = 1024 + pceil(pose.position.x/(4*MAP_RESOLUTION));
			int y = 1024 + pceil(pose.position.y/(4*MAP_RESOLUTION));
				
			for (int i = x-5; i < x+5; i++)
				for (int j = y-5; j < y+5; j++) {
					if (i >= 0 && j >= 0 && i < infos.width && j < infos.height)
						signalMap.at<uint8_t>(i,j) = (uint8_t) (msg->data*255);	
				}
		

			//double ratio = w / ((double)h);
			cv::Size new_size = cv::Size(WIN_SIZE*0.5,WIN_SIZE); 
			cv::resize(signalMap,coloredSignalMap,new_size);
			cv::imshow( "signalMap", coloredSignalMap);
		}
		
		void publish_turning (float angle) {
			
		}
		
		void publish_straight () {
			
		}
		 
		void Pose_out_callback(geometry_msgs::PoseStamped msg) {
			pose = msg.pose;
			
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
			
			if (point1)  {
				passages.push_back(mPoint(pose.position.x+DISTANCE_NEW_POINTS, pose.position.y));
				cv::circle(passagesMap, cv::Point(passages[passages.size()-1].x/(4*MAP_RESOLUTION)+256,passages[passages.size()-1].y/(4*MAP_RESOLUTION)+256), DISTANCE_MIN_NEW_POINTS/(8*MAP_RESOLUTION), 255);
			}
			if (point2) {
				passages.push_back(mPoint(pose.position.x-DISTANCE_NEW_POINTS, pose.position.y));
			}
			if (point3) {
				passages.push_back(mPoint(pose.position.x, pose.position.y+DISTANCE_NEW_POINTS));
			}
			if (point4) {
				passages.push_back(mPoint(pose.position.x, pose.position.y-DISTANCE_NEW_POINTS));
			}
			
			double min = INF;
			double tmp; 
			
			if (hypot(passages[index_objective].x - pose.position.x, passages[index_objective].y - pose.position.y) < DISTANCE_ARRIVEE) {
				passages[index_objective].etat == 2;
			}

			if (passages[index_objective].etat == 2) {
				for (int i = 0; i < passages.size(); ++i) {
					if ((tmp = hypot(passages[i].x - pose.position.x,passages[i].y - pose.position.y) < min && hypot(passages[i].x - pose.position.x,passages[i].y - pose.position.y)) > DISTANCE_MIN_NEW_POINTS && passages[index_objective].etat == 1)
						index_objective = i;
				} 
				passages[index_objective].etat == 1;
			}

			cv::imshow( "Passages", passagesMap);

		}
		
		void Map_Data_callback(const nav_msgs::MapMetaDataConstPtr & msg) {
			infos = *msg;
			ROS_INFO("Maj Map_Data");
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
			ROS_INFO("LE PROBLEME EST LA");
			signalMap = cv::Mat_<uint8_t> (2048, 2048); 
			passagesMap = cv::Mat_<uint8_t> (512, 512); 
		}
};

int main(int argc, char * argv[]) {
	ros::init(argc,argv,"Mapping_simple");
	Mapping_simple ogp;
	cv::namedWindow ("BeforeErosion", cv::WINDOW_AUTOSIZE );
	cv::namedWindow( "signalMap", CV_WINDOW_AUTOSIZE );
	cv::namedWindow( "Passages", CV_WINDOW_AUTOSIZE );
	while (ros::ok()) {
		ros::spinOnce();
		if (cv::waitKey( 50 )== 'q') {
			ros::shutdown();
		}
	} 
}

