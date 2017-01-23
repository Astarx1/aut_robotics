// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetObjectQuaternionRequest {
  constructor() {
    this.handle = 0;
    this.relativeToObjectHandle = 0;
    this.quaternion = new geometry_msgs.msg.Quaternion();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetObjectQuaternionRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [relativeToObjectHandle]
    bufferInfo = _serializer.int32(obj.relativeToObjectHandle, bufferInfo);
    // Serialize message field [quaternion]
    bufferInfo = geometry_msgs.msg.Quaternion.serialize(obj.quaternion, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetObjectQuaternionRequest
    let tmp;
    let len;
    let data = new simRosSetObjectQuaternionRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [relativeToObjectHandle]
    tmp = _deserializer.int32(buffer);
    data.relativeToObjectHandle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [quaternion]
    tmp = geometry_msgs.msg.Quaternion.deserialize(buffer);
    data.quaternion = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetObjectQuaternionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9d74781e3cdb8dd84f786051a3a1c90b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    int32 relativeToObjectHandle
    geometry_msgs/Quaternion quaternion
    
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

class simRosSetObjectQuaternionResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetObjectQuaternionResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetObjectQuaternionResponse
    let tmp;
    let len;
    let data = new simRosSetObjectQuaternionResponse();
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
    return 'vrep_common/simRosSetObjectQuaternionResponse';
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
  Request: simRosSetObjectQuaternionRequest,
  Response: simRosSetObjectQuaternionResponse
};
