/* Made by Romain
 * Topic suscribed :
 * 		- MapMetaDataConstPtr map_data
 * 		- OccupancyGridConstPtr msg
 */

#include <cmath>

#include <ros/ros.h> 
#include <opencv2/opencv.hpp>

#include <sensor_msgs/JointState.h>
#include <tf/transform_broadcaster.h>
#include <tf/transform_listener.h>
#include <geometry_msgs/Pose.h>
#include <nav_msgs/Odometry.h>

#define ENTRAXE 0.1
#define WHEEL_SIZE 0.1
#define PI_VAL 3.1415927

class My_Odom {
	protected:
		ros::NodeHandle nh_;
		ros::Subscriber right_wheel_topic, left_wheel_topic;
		ros::Publisher odom_publish;
		tf::TransformBroadcaster odom_broadcaster;

		sensor_msgs::JointState right_state, left_state, old_right_state, old_left_state;
		bool right_actu, left_actu, initialized;
		
		float x,y,z, w;
		
		float LessThan (float val) {
			while (val > PI_VAL) 
				val -= PI_VAL;
			while (val < -PI_VAL)
				val += PI_VAL;
			return val; 
		}
		
	public:
		void Right_callback(const sensor_msgs::JointState & msg) {
			if (msg.position.size() > 0) {
				right_actu = true;
			}
			else {
				return;
			}
			
			if (initialized)
				old_right_state = right_state;
			else
				old_right_state = msg;
				
			right_state = msg;
			
			if (left_actu && right_actu)
				compute_transform();
		} 
		
		void Left_callback(const sensor_msgs::JointState & msg) {

			if (msg.position.size() > 0) {	
				left_actu = true;
			}
			else {
				return;
			}
				
			if (initialized)
				old_left_state = left_state;
			else
				old_left_state = msg;
			
			left_state = msg;
			
			if (left_actu && right_actu)
				compute_transform();
		}
		
		void compute_transform() {	
			ROS_INFO("Compute_transform");
					
			left_actu = false;
			right_actu = false;
			
			if (!initialized) {
				initialized = true;
				return;
			}
			
			if (right_state.position.size() == 0 || old_right_state.position.size()  == 0 || 
				left_state.position.size() == 0 || old_left_state.position.size() == 0) {
				printf ("ca marche pas :("); 
				return;
			}
			
			printf ("compute_transform - sizes : %d, %d, %d, %d\n", right_state.position.size(), old_right_state.position.size(), 
				left_state.position.size(), old_left_state.position.size());
			
			float dor = old_right_state.position[0];
			float dr = right_state.position[0];
			float dol = old_left_state.position[0];
			float dl = left_state.position[0];
			
			float dright = LessThan(dr - dor)*WHEEL_SIZE;
			float dleft = LessThan(dl - dol)*WHEEL_SIZE;
			float dw = (dright - dleft)/ENTRAXE;
			float dm = (dleft + dright)/2.0;
			
			x += dm * std::cos(w);
			y += dm * std::sin(w);
			z = LessThan(dr - dor);
			w += dw;
			
			ROS_INFO("compute_transform - Envoi des donnees");
			send_odom_tf();
			publish_pose();
		}
		
		void send_odom_tf () { 
			ROS_INFO("Maj publish on tf");
			geometry_msgs::Quaternion odom_quat = tf::createQuaternionMsgFromYaw(w);
			geometry_msgs::TransformStamped odom_trans;
			
			odom_trans.child_frame_id = "base_link";
			odom_trans.header.frame_id = "odom";
			odom_trans.transform.translation.x = x;
			odom_trans.transform.translation.y = y;
			odom_trans.transform.translation.z = w;
			odom_trans.transform.rotation = odom_quat;
			
			odom_broadcaster.sendTransform(odom_trans);
		}
		
		void publish_pose () {
			ROS_INFO("Maj publish_odom");
			
			nav_msgs::Odometry odom;
			odom.header.frame_id = "odom";
			geometry_msgs::Quaternion odom_quat = tf::createQuaternionMsgFromYaw(w);
			odom.pose.pose.position.x = x;
			odom.pose.pose.position.y = y;
			odom.pose.pose.position.z = z;
			odom.pose.pose.orientation = odom_quat;
			odom_publish.publish(odom);
		}
		
		My_Odom() : nh_("~") { 
			right_wheel_topic = nh_.subscribe("right",false,&My_Odom::Right_callback,this);
			left_wheel_topic = nh_.subscribe("left",false,&My_Odom::Left_callback,this);
			odom_publish = nh_.advertise<nav_msgs::Odometry>("odom", 10);
			tf::TransformBroadcaster odom_broadcaster;
			x = 0;
			y = 0;
			z=0;
			w = 0;
			initialized = false;
		}
};

int main(int argc, char * argv[]) {
	ros::init(argc,argv,"My_Odom");
	My_Odom MyO; 
	while (ros::ok()) {
		ros::spinOnce();
		if (cv::waitKey( 50 )== 'q') {
			ros::shutdown();
		}
	} 
}

