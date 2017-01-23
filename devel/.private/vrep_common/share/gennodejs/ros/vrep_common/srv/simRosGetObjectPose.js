// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class simRosGetObjectPoseRequest {
  constructor() {
    this.handle = 0;
    this.relativeToObjectHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectPoseRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [relativeToObjectHandle]
    bufferInfo = _serializer.int32(obj.relativeToObjectHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectPoseRequest
    let tmp;
    let len;
    let data = new simRosGetObjectPoseRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [relativeToObjectHandle]
    tmp = _deserializer.int32(buffer);
    data.relativeToObjectHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectPoseRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f089c181599d2dcbd1172f3eff51abb2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    int32 relativeToObjectHandle
    
    `;
  }

};

class simRosGetObjectPoseResponse {
  constructor() {
    this.result = 0;
    this.pose = new geometry_msgs.msg.PoseStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectPoseResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.pose, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectPoseResponse
    let tmp;
    let len;
    let data = new simRosGetObjectPoseResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectPoseResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'beb984372af50548a529c62446caa7d8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    geometry_msgs/PoseStamped pose
    
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
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

module.exports = {
  Request: simRosGetObjectPoseRequest,
  Response: simRosGetObjectPoseResponse
};
