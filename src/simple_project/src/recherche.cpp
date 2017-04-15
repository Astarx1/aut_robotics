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
		ros::Publisher map_publish;
		nav_msgs::MapMetaData infos;
		
		cv::Mat_<uint8_t> erodedMap, signalMap;
		cv::Mat_<cv::Vec3b> coloredMap, coloredSignalMap;
		geometry_msgs::Pose pose;
		
		int minx, miny, maxx, maxy;
		int prev_size_x, prev_size_y;
		bool size_changed, map_initialized;
		
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
			cv::Mat_<cv::Vec3b> cropped_og = cv::Mat_<cv::Vec3b>(coloredMap,cv::Rect(minx,miny,w,h));

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
				cv::imshow( "Mapping_simple", resized_og);
			} else {
				cv::imshow( "Mapping_simple", coloredMap);
			}
			
			if (msg.info.height != prev_size_y || msg.info.width != prev_size_x) {
				prev_size_y != msg.info.height;
				prev_size_x != msg.info.width;
				size_changed;
			}
			map_initialized = true;
		}
		
		void Signal_callback(const std_msgs::Float32ConstPtr & msg) {
			if (!map_initialized)
				return;
				
			if(size_changed == false) {
				
			}
			else {
				signalMap = erodedMap;
				size_changed = true;
			}
		}
		
		void Pose_out_callback(geometry_msgs::PoseStamped msg) {
			pose = msg.pose;
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

