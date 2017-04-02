#include <ros/ros.h>
#include <opencv2/opencv.hpp>

#define SIZE_MATRIX 100
#define 

class OccupancyGridPlanner {
	protected:
		ros::NodeHandle nh_;
		cv::Mat_<cv::Vec3b> og_rgb_marked;
	public:
		OccupancyGridPlanner() : nh_("~") {
			og_rgb_marked_ = cv::Mat_<uint8_t>(msg->info.height, msg->info.width,0xFF);
		}
};

int main(int argc, char * argv[]) {
    ros::init(argc,argv,"occgrid_planner");
    OccupancyGridPlanner ogp;
    cv::namedWindow( "OccGrid", CV_WINDOW_AUTOSIZE );
    while (ros::ok()) {
        ros::spinOnce();
        if (cv::waitKey( 50 )== 'q') {
            ros::shutdown();
        }
    }
}

