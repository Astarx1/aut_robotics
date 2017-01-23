cmake_minimum_required(VERSION 2.8.3)
project(vrep_skeleton_msg_and_srv)


find_package(catkin REQUIRED COMPONENTS message_generation std_msgs)

include_directories(${catkin_INCLUDE_DIRS})

# add_message_files(FILES yourMessageHere.msg)

add_service_files(FILES displayText.srv)

generate_messages(DEPENDENCIES std_msgs)

link_directories("/opt/ros/fuerte/lib")
link_directories("/opt/ros/groovy/lib")
link_directories("/opt/ros/hydro/lib")
link_directories("/opt/ros/indigo/lib")
link_directories("/opt/ros/jade/lib")
link_directories("/opt/ros/kinetic/lib")
link_directories("/opt/ros/kinetic/share/")

catkin_package(
  LIBRARIES
  CATKIN_DEPENDS message_runtime
)
