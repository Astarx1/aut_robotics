# aut_robotics
Uninstalled packages : sudo apt-get install ros-kinetic-rocon-remocon ros-kinetic-rocon-qt-library

Compile sequence :

# Init

roscore

cd ~/VREP

./vrep.sh

# set_joy

cd /dev/input/

sudo chmod a+rwx $1

rosparam set joy_node/dev "/dev/input/$1"

sudo jstest /dev/input/$1

# cat_prepare

source /opt/ros/kinetic/setup.bash

cd [Directory]/catkin_ws/

catkin build

source [Directory]/catkin_ws/devel/setup.bash