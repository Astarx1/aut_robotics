#include <math.h>
#include "TaskStareAtFace.h"
#include "floor_nav/TaskStareAtFaceConfig.h"
using namespace task_manager_msgs;
using namespace task_manager_lib;
using namespace floor_nav;

// #define DEBUG_GOTO

TaskIndicator TaskStareAtFace::initialise() {
	return TaskStatus::TASK_INITIALISED;
}

TaskIndicator TaskStareAtFace::iterate() {
	env->publishVelocity(0,0);
	for (int i = 0; i < cfg.time_wait; ++i) ;
	return TaskStatus::TASK_COMPLETED;
}

TaskIndicator TaskStareAtFace::terminate() {
	env->publishVelocity(0,0);
	return TaskStatus::TASK_TERMINATED;
}

DYNAMIC_TASK(TaskFactoryStareAtFace);
