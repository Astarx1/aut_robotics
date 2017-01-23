// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class simRosGetJointMatrixRequest {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetJointMatrixRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetJointMatrixRequest
    let tmp;
    let len;
    let data = new simRosGetJointMatrixRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetJointMatrixRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '92535b678299d2bdda959704e78c275e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    
    `;
  }

};

class simRosGetJointMatrixResponse {
  constructor() {
    this.result = 0;
    this.transform = new geometry_msgs.msg.TransformStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetJointMatrixResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [transform]
    bufferInfo = geometry_msgs.msg.TransformStamped.serialize(obj.transform, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetJointMatrixResponse
    let tmp;
    let len;
    let data = new simRosGetJointMatrixResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [transform]
    tmp = geometry_msgs.msg.TransformStamped.deserialize(buffer);
    data.transform = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetJointMatrixResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ea4c0896312fb5454e09fdc654d37fab';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    geometry_msgs/TransformStamped transform
    
    
    ================================================================================
    MSG: geometry_msgs/TransformStamped
    # This expresses a transform from coordinate frame header.frame_id
    # to the coordinate frame child_frame_id
    #
    # This message is mostly used by the 
    # <a href="http://wiki.ros.org/tf">tf</a> package. 
    # See its documentation for more information.
    
    Header header
    string child_frame_id # the frame id of the child frame
    Transform transform
    
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
    MSG: geometry_msgs/Transform
    # This represents the transform between two coordinate frames in free space.
    
    Vector3 translation
    Quaternion rotation
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
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
  Request: simRosGetJointMatrixRequest,
  Response: simRosGetJointMatrixResponse
};
