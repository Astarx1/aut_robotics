# generated from genmsg/cmake/pkg-genmsg.cmake.em

message(STATUS "occgrid_planner: 2 messages, 0 services")

set(MSG_I_FLAGS "-Ioccgrid_planner:/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg;-Igeometry_msgs:/opt/ros/kinetic/share/geometry_msgs/cmake/../msg;-Inav_msgs:/opt/ros/kinetic/share/nav_msgs/cmake/../msg;-Isensor_msgs:/opt/ros/kinetic/share/sensor_msgs/cmake/../msg;-Istd_msgs:/opt/ros/kinetic/share/std_msgs/cmake/../msg;-Iactionlib_msgs:/opt/ros/kinetic/share/actionlib_msgs/cmake/../msg")

# Find all generators
find_package(gencpp REQUIRED)
find_package(geneus REQUIRED)
find_package(genlisp REQUIRED)
find_package(gennodejs REQUIRED)
find_package(genpy REQUIRED)

add_custom_target(occgrid_planner_generate_messages ALL)

# verify that message/service dependencies have not changed since configure



get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg" NAME_WE)
add_custom_target(_occgrid_planner_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "occgrid_planner" "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg" "geometry_msgs/Twist:std_msgs/Header:geometry_msgs/Quaternion:occgrid_planner/TrajectoryElement:geometry_msgs/Point:geometry_msgs/Vector3:geometry_msgs/Pose"
)

get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg" NAME_WE)
add_custom_target(_occgrid_planner_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "occgrid_planner" "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg" "geometry_msgs/Twist:std_msgs/Header:geometry_msgs/Quaternion:geometry_msgs/Vector3:geometry_msgs/Point:geometry_msgs/Pose"
)

#
#  langs = gencpp;geneus;genlisp;gennodejs;genpy
#

### Section generating for lang: gencpp
### Generating Messages
_generate_msg_cpp(occgrid_planner
  "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/occgrid_planner
)
_generate_msg_cpp(occgrid_planner
  "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/occgrid_planner
)

### Generating Services

### Generating Module File
_generate_module_cpp(occgrid_planner
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/occgrid_planner
  "${ALL_GEN_OUTPUT_FILES_cpp}"
)

add_custom_target(occgrid_planner_generate_messages_cpp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_cpp}
)
add_dependencies(occgrid_planner_generate_messages occgrid_planner_generate_messages_cpp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg" NAME_WE)
add_dependencies(occgrid_planner_generate_messages_cpp _occgrid_planner_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg" NAME_WE)
add_dependencies(occgrid_planner_generate_messages_cpp _occgrid_planner_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(occgrid_planner_gencpp)
add_dependencies(occgrid_planner_gencpp occgrid_planner_generate_messages_cpp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS occgrid_planner_generate_messages_cpp)

### Section generating for lang: geneus
### Generating Messages
_generate_msg_eus(occgrid_planner
  "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/occgrid_planner
)
_generate_msg_eus(occgrid_planner
  "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/occgrid_planner
)

### Generating Services

### Generating Module File
_generate_module_eus(occgrid_planner
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/occgrid_planner
  "${ALL_GEN_OUTPUT_FILES_eus}"
)

add_custom_target(occgrid_planner_generate_messages_eus
  DEPENDS ${ALL_GEN_OUTPUT_FILES_eus}
)
add_dependencies(occgrid_planner_generate_messages occgrid_planner_generate_messages_eus)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg" NAME_WE)
add_dependencies(occgrid_planner_generate_messages_eus _occgrid_planner_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg" NAME_WE)
add_dependencies(occgrid_planner_generate_messages_eus _occgrid_planner_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(occgrid_planner_geneus)
add_dependencies(occgrid_planner_geneus occgrid_planner_generate_messages_eus)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS occgrid_planner_generate_messages_eus)

### Section generating for lang: genlisp
### Generating Messages
_generate_msg_lisp(occgrid_planner
  "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/occgrid_planner
)
_generate_msg_lisp(occgrid_planner
  "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/occgrid_planner
)

### Generating Services

### Generating Module File
_generate_module_lisp(occgrid_planner
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/occgrid_planner
  "${ALL_GEN_OUTPUT_FILES_lisp}"
)

add_custom_target(occgrid_planner_generate_messages_lisp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_lisp}
)
add_dependencies(occgrid_planner_generate_messages occgrid_planner_generate_messages_lisp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg" NAME_WE)
add_dependencies(occgrid_planner_generate_messages_lisp _occgrid_planner_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg" NAME_WE)
add_dependencies(occgrid_planner_generate_messages_lisp _occgrid_planner_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(occgrid_planner_genlisp)
add_dependencies(occgrid_planner_genlisp occgrid_planner_generate_messages_lisp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS occgrid_planner_generate_messages_lisp)

### Section generating for lang: gennodejs
### Generating Messages
_generate_msg_nodejs(occgrid_planner
  "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/occgrid_planner
)
_generate_msg_nodejs(occgrid_planner
  "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/occgrid_planner
)

### Generating Services

### Generating Module File
_generate_module_nodejs(occgrid_planner
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/occgrid_planner
  "${ALL_GEN_OUTPUT_FILES_nodejs}"
)

add_custom_target(occgrid_planner_generate_messages_nodejs
  DEPENDS ${ALL_GEN_OUTPUT_FILES_nodejs}
)
add_dependencies(occgrid_planner_generate_messages occgrid_planner_generate_messages_nodejs)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg" NAME_WE)
add_dependencies(occgrid_planner_generate_messages_nodejs _occgrid_planner_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg" NAME_WE)
add_dependencies(occgrid_planner_generate_messages_nodejs _occgrid_planner_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(occgrid_planner_gennodejs)
add_dependencies(occgrid_planner_gennodejs occgrid_planner_generate_messages_nodejs)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS occgrid_planner_generate_messages_nodejs)

### Section generating for lang: genpy
### Generating Messages
_generate_msg_py(occgrid_planner
  "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/occgrid_planner
)
_generate_msg_py(occgrid_planner
  "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/occgrid_planner
)

### Generating Services

### Generating Module File
_generate_module_py(occgrid_planner
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/occgrid_planner
  "${ALL_GEN_OUTPUT_FILES_py}"
)

add_custom_target(occgrid_planner_generate_messages_py
  DEPENDS ${ALL_GEN_OUTPUT_FILES_py}
)
add_dependencies(occgrid_planner_generate_messages occgrid_planner_generate_messages_py)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/Trajectory.msg" NAME_WE)
add_dependencies(occgrid_planner_generate_messages_py _occgrid_planner_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/GTL/ramuat/aut_robotics/src/occgrid_planner/msg/TrajectoryElement.msg" NAME_WE)
add_dependencies(occgrid_planner_generate_messages_py _occgrid_planner_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(occgrid_planner_genpy)
add_dependencies(occgrid_planner_genpy occgrid_planner_generate_messages_py)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS occgrid_planner_generate_messages_py)



if(gencpp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/occgrid_planner)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/occgrid_planner
    DESTINATION ${gencpp_INSTALL_DIR}
  )
endif()
if(TARGET geometry_msgs_generate_messages_cpp)
  add_dependencies(occgrid_planner_generate_messages_cpp geometry_msgs_generate_messages_cpp)
endif()
if(TARGET nav_msgs_generate_messages_cpp)
  add_dependencies(occgrid_planner_generate_messages_cpp nav_msgs_generate_messages_cpp)
endif()
if(TARGET sensor_msgs_generate_messages_cpp)
  add_dependencies(occgrid_planner_generate_messages_cpp sensor_msgs_generate_messages_cpp)
endif()
if(TARGET std_msgs_generate_messages_cpp)
  add_dependencies(occgrid_planner_generate_messages_cpp std_msgs_generate_messages_cpp)
endif()

if(geneus_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/occgrid_planner)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/occgrid_planner
    DESTINATION ${geneus_INSTALL_DIR}
  )
endif()
if(TARGET geometry_msgs_generate_messages_eus)
  add_dependencies(occgrid_planner_generate_messages_eus geometry_msgs_generate_messages_eus)
endif()
if(TARGET nav_msgs_generate_messages_eus)
  add_dependencies(occgrid_planner_generate_messages_eus nav_msgs_generate_messages_eus)
endif()
if(TARGET sensor_msgs_generate_messages_eus)
  add_dependencies(occgrid_planner_generate_messages_eus sensor_msgs_generate_messages_eus)
endif()
if(TARGET std_msgs_generate_messages_eus)
  add_dependencies(occgrid_planner_generate_messages_eus std_msgs_generate_messages_eus)
endif()

if(genlisp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/occgrid_planner)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/occgrid_planner
    DESTINATION ${genlisp_INSTALL_DIR}
  )
endif()
if(TARGET geometry_msgs_generate_messages_lisp)
  add_dependencies(occgrid_planner_generate_messages_lisp geometry_msgs_generate_messages_lisp)
endif()
if(TARGET nav_msgs_generate_messages_lisp)
  add_dependencies(occgrid_planner_generate_messages_lisp nav_msgs_generate_messages_lisp)
endif()
if(TARGET sensor_msgs_generate_messages_lisp)
  add_dependencies(occgrid_planner_generate_messages_lisp sensor_msgs_generate_messages_lisp)
endif()
if(TARGET std_msgs_generate_messages_lisp)
  add_dependencies(occgrid_planner_generate_messages_lisp std_msgs_generate_messages_lisp)
endif()

if(gennodejs_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/occgrid_planner)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/occgrid_planner
    DESTINATION ${gennodejs_INSTALL_DIR}
  )
endif()
if(TARGET geometry_msgs_generate_messages_nodejs)
  add_dependencies(occgrid_planner_generate_messages_nodejs geometry_msgs_generate_messages_nodejs)
endif()
if(TARGET nav_msgs_generate_messages_nodejs)
  add_dependencies(occgrid_planner_generate_messages_nodejs nav_msgs_generate_messages_nodejs)
endif()
if(TARGET sensor_msgs_generate_messages_nodejs)
  add_dependencies(occgrid_planner_generate_messages_nodejs sensor_msgs_generate_messages_nodejs)
endif()
if(TARGET std_msgs_generate_messages_nodejs)
  add_dependencies(occgrid_planner_generate_messages_nodejs std_msgs_generate_messages_nodejs)
endif()

if(genpy_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/occgrid_planner)
  install(CODE "execute_process(COMMAND \"/usr/bin/python\" -m compileall \"${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/occgrid_planner\")")
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/occgrid_planner
    DESTINATION ${genpy_INSTALL_DIR}
  )
endif()
if(TARGET geometry_msgs_generate_messages_py)
  add_dependencies(occgrid_planner_generate_messages_py geometry_msgs_generate_messages_py)
endif()
if(TARGET nav_msgs_generate_messages_py)
  add_dependencies(occgrid_planner_generate_messages_py nav_msgs_generate_messages_py)
endif()
if(TARGET sensor_msgs_generate_messages_py)
  add_dependencies(occgrid_planner_generate_messages_py sensor_msgs_generate_messages_py)
endif()
if(TARGET std_msgs_generate_messages_py)
  add_dependencies(occgrid_planner_generate_messages_py std_msgs_generate_messages_py)
endif()
