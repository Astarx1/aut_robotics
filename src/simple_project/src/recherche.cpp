/* Made by Romain
 * Topic suscribed :
 * 		- MapMetaDataConstPtr map_data
 * 		- OccupancyGridConstPtr msg
 */
 
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
		
		cv::Mat_<uint8_t> erodedMap, signalMap;
		cv::Mat_<cv::Vec3b> coloredMap, coloredSignalMap;
		geometry_msgs::Pose pose;
		
		int minx, miny, maxx, maxy;
		int initial_x, initial_y;
		int prev_size_x, prev_size_y;
		bool size_changed, map_initialized, resize;
		cv::Mat_<cv::Vec3b> old_resized_signal;
		
		void Map_callback(const nav_msgs::OccupancyGrid msg) {
			cv::Mat_<uint8_t> BeforeErosion = cv::Mat_<uint8_t>(msg.info.height, msg.info.width, 0xFF);
			maxx = msg.info.width; maxy = msg.info.height; 
			minx = 0; miny = 0;
			ROS_INFO("Map_callback");
						
			for (unsigned int j=0;j < msg.info.height;j++) {
				for (unsigned int i=0;i < msg.info.width;i++) {
					int8_t v = msg.data[j*infos.width + i];
					switch (v) {
						case 0: 
							BeforeErosion(j,i) = FREE; 
							break;
						case 100: 
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
			
			// Affichage de la map erodee
			cv::cvtColor(erodedMap, coloredMap, CV_GRAY2RGB);
			/*cv::Mat_<cv::Vec3b> cropped_og = cv::Mat_<cv::Vec3b>(coloredMap,cv::Rect(minx,miny,w,h));

			if ((w > WIN_SIZE) || (h > WIN_SIZE)) {
				double ratio = w / ((double)h);
				cv::Size new_size;
				if (ratio >= 1) {
					new_size = cv::Size(WIN_SIZE,WIN_SIZE/ratio);
				} else {
					new_size = cv::Size(WIN_SIZE*ratio,WIN_SIZE);
				}
				cv::Mat_<cv::Vec3b> resized_og;
				cv::resize(cropped_og,resized_og,new_size);
				cv::imshow( "Map", resized_og);
			} else {
				cv::imshow( "Map", coloredMap);
			}*/
			
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
				
			if(!size_changed) {
				int x = initial_x + pceil(pose.position.x/(4*MAP_RESOLUTION));
				int y = initial_y + pceil(pose.position.y/(4*MAP_RESOLUTION));
				
				int x_real = initial_x + pceil(pose.position.x/(MAP_RESOLUTION));
				int y_real = initial_y + pceil(pose.position.y/(MAP_RESOLUTION));
				
				//ROS_INFO("Size didn't change : %d (%d + %d), %d (%d + %d) -> %f", x, initial_x, pceil(pose.position.x/MAP_RESOLUTION), y, initial_y, pceil(pose.position.x/MAP_RESOLUTION), (msg->data*255));

				for (int i = x-5; i < x+5; i++)
					for (int j = y-5; j < y+5; j++) {
						if (i >= 0 && j >= 0 && i < infos.width && j < infos.height)
							signalMap.at<uint8_t>(i,j) = (uint8_t) (msg->data*255);	
					}
		
				
				//cv::cvtColor(signalMap, coloredSignalMap, CV_GRAY2RGB);
				unsigned int w = maxx - minx;
				unsigned int h = maxy - miny;
				
				/*cv::Mat_<cv::Vec3b> cropped_signal = cv::Mat_<cv::Vec3b>(coloredSignalMap,cv::Rect(minx,miny,w,h));

				//if ((w > WIN_SIZE) || (h > WIN_SIZE)) {
				if(true) {
					double ratio = w / ((double)h);
					cv::Size new_size;
					if (ratio >= 1) {
						new_size = cv::Size(WIN_SIZE,WIN_SIZE/ratio);
					} else {
						new_size = cv::Size(WIN_SIZE*ratio,WIN_SIZE);
					}
					cv::Mat_<cv::Vec3b> resized_signal;
					cv::resize(cropped_signal,resized_signal,new_size);
					if (resize) {
						double diff_resiz = cv::norm (old_resized_signal-resized_signal);
						ROS_INFO("Difference : %f", diff_resiz);
					}
					old_resized_signal = resized_signal;
					resize = true;
					cv::imshow( "t", resized_signal);
				} /*else {
					cv::imshow( "SignalMap", resized_og);
				}	*/
				double ratio = w / ((double)h);
				cv::Size new_size = cv::Size(WIN_SIZE*ratio,WIN_SIZE); 
				cv::resize(signalMap,coloredSignalMap,new_size);
				//cv::namedWindow( "signalMap", CV_WINDOW_AUTOSIZE );
				cv::imshow( "signalMap", coloredSignalMap);
				
				for (int a = 4; a < 50; a++) 
					for (int i = -a; i < a; ++i) {
						if (erodedMap.at<uint8_t>(x_real + a, y_real + i) == FREE) {
							
						}
						if (erodedMap.at<uint8_t>(x_real - a, y_real + i) == FREE) {
							
						}
						if (erodedMap.at<uint8_t>(x_real - i, y_real + a) == FREE) {
							
						}
						if (erodedMap.at<uint8_t>(x_real + i, y_real - a) == FREE) {
							
						}
					}
			}
			
			else {
				if (resize) {
					;
				}
				else {
					
					resize = true;
				}
				ROS_INFO("Signal created %d, %d. Middle : %d, %d", infos.width, infos.height, initial_x, initial_y);
				size_changed = false;
			}
		}
		
		void publish_turning (float angle) {
			
		}
		
		void publish_straight () {
			
		}
		
		void Pose_out_callback(geometry_msgs::PoseStamped msg) {
			pose = msg.pose;
			ROS_INFO("Maj pose");
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
		}
};

int main(int argc, char * argv[]) {
	ros::init(argc,argv,"Mapping_simple");
	Mapping_simple ogp;
	cv::namedWindow ("BeforeErosion", cv::WINDOW_AUTOSIZE );
	cv::namedWindow( "Mapping_simple", CV_WINDOW_AUTOSIZE );
	while (ros::ok()) {
		ros::spinOnce();
		if (cv::waitKey( 50 )== 'q') {
			ros::shutdown();
		}
	} 
}

