#!/usr/bin/env python
import roslib; roslib.load_manifest('vrep_ros_teleop')
import rospy
from sensor_msgs.msg import Joy
from geometry_msgs.msg import Twist

joy_value = None
initialized = False

def joy_cb(value):
	global joy_value
	global initialized
	joy_value = value
	initialized = True
	rospy.loginfo("joystick value received :D")


def talker():
	global joy_value
	global initialized
	rospy.init_node('vrep_ros_teleop')
	sub = rospy.Subscriber('joy', Joy, joy_cb)
	pub = rospy.Publisher('twistCommand', Twist, queue_size=1)
	axis_linear = rospy.get_param("~axis_linear",1)
	axis_angular = rospy.get_param("~axis_angular",0)
	scale_linear = rospy.get_param("~scale_linear",5.0)
	scale_angular = rospy.get_param("~scale_angular",10.0)
	rospy.loginfo("Launching joystick command : " + str(rospy.is_shutdown()))
	while True:
		twist = Twist()
		if initialized:
			twist.linear.x = joy_value.axes[axis_linear] * scale_linear
			rospy.loginfo("Different de 0 !!!")
			twist.angular.z = joy_value.axes[axis_angular] * scale_angular
		else:
			twist.linear.x = 0
			twist.angular.z = 0
			rospy.loginfo(" 0 !!!")


		if (twist.linear.x < 0):
			twist.angular.z = - twist.angular.z
		pub.publish(twist)
		rospy.loginfo("Sent !")

if __name__ == '__main__':
	try:
		rospy.loginfo("Testttttiiiiiiiinnnnnnngggggggg !")
		talker()

	except rospy.ROSInterruptException:
		pass
