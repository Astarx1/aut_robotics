// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetObjectPoseRequest {
  constructor() {
    this.handle = 0;
    this.relativeToObjectHandle = 0;
    this.pose = new geometry_msgs.msg.Pose();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetObjectPoseRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [relativeToObjectHandle]
    bufferInfo = _serializer.int32(obj.relativeToObjectHandle, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetObjectPoseRequest
    let tmp;
    let len;
    let data = new simRosSetObjectPoseRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [relativeToObjectHandle]
    tmp = _deserializer.int32(buffer);
    data.relativeToObjectHandle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetObjectPoseRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e96867bf56162355e110db9de4e03f85';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    int32 relativeToObjectHandle
    geometry_msgs/Pose pose
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

class simRosSetObjectPoseResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetObjectPoseResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetObjectPoseResponse
    let tmp;
    let len;
    let data = new simRosSetObjectPoseResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetObjectPoseResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '034a8e20d6a306665e3a5b340fab3f09';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    
    
    `;
  }

};

module.exports = {
  Request: simRosSetObjectPoseRequest,
  Response: simRosSetObjectPoseResponse
};
