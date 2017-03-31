# Install script for directory: /home/GTL/ramuat/aut_robotics/src/robot_control_base

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/home/GTL/ramuat/aut_robotics/install")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include/robot_control_base" TYPE FILE FILES "/home/GTL/ramuat/aut_robotics/devel/include/robot_control_base/FollowLineConfig.h")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include/robot_control_base" TYPE FILE FILES "/home/GTL/ramuat/aut_robotics/devel/include/robot_control_base/GotoXYConfig.h")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include/robot_control_base" TYPE FILE FILES "/home/GTL/ramuat/aut_robotics/devel/include/robot_control_base/GotoXYThetaConfig.h")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/python2.7/dist-packages/robot_control_base" TYPE FILE FILES "/home/GTL/ramuat/aut_robotics/devel/lib/python2.7/dist-packages/robot_control_base/__init__.py")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  execute_process(COMMAND "/usr/bin/python" -m compileall "/home/GTL/ramuat/aut_robotics/devel/lib/python2.7/dist-packages/robot_control_base/cfg")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/python2.7/dist-packages/robot_control_base" TYPE DIRECTORY FILES "/home/GTL/ramuat/aut_robotics/devel/lib/python2.7/dist-packages/robot_control_base/cfg")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/pkgconfig" TYPE FILE FILES "/home/GTL/ramuat/aut_robotics/build/robot_control_base/catkin_generated/installspace/robot_control_base.pc")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/robot_control_base/cmake" TYPE FILE FILES
    "/home/GTL/ramuat/aut_robotics/build/robot_control_base/catkin_generated/installspace/robot_control_baseConfig.cmake"
    "/home/GTL/ramuat/aut_robotics/build/robot_control_base/catkin_generated/installspace/robot_control_baseConfig-version.cmake"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/robot_control_base" TYPE FILE FILES "/home/GTL/ramuat/aut_robotics/src/robot_control_base/package.xml")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/robot_control_base" TYPE PROGRAM FILES
    "/home/GTL/ramuat/aut_robotics/src/robot_control_base/nodes/bubble_odom.py"
    "/home/GTL/ramuat/aut_robotics/src/robot_control_base/nodes/follow_line.py"
    "/home/GTL/ramuat/aut_robotics/src/robot_control_base/nodes/goto_xy.py"
    "/home/GTL/ramuat/aut_robotics/src/robot_control_base/nodes/goto_xytheta.py"
    )
endif()

