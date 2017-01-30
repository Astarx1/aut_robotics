#!/usr/bin/python
# ROS specific imports
import roslib; roslib.load_manifest('floor_nav')
import rospy
from math import *
from task_manager_lib.TaskClient import *

rospy.init_node('task_client')
server_node = rospy.get_param("~server","/task_server")
default_period = rospy.get_param("~period",0.2)
tc = TaskClient(server_node,default_period)
rospy.loginfo("Mission connected to server: " + server_node)

tc.WaitForAuto()

while True:
	# Start the wait for roi task in the background
	w4roi = tc.WaitForFace(foreground=False)
	# Prepare a condition so that the following gets executed only until the 
	# Region of Interest is found
	tc.addCondition(ConditionIsCompleted("ROI detector",tc,w4roi))

	rospy.loginfo("Pas d'erreur en vue !")
	try:
		tc.Wander()
	except TaskConditionException, e:
		tc.StareAtFace()
		rospy.loginfo("Exception caught: " + str(e))

		#tc.SetHeading(target=1)


rospy.loginfo("Mission completed")


