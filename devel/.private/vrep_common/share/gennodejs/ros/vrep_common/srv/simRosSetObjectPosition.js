// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetObjectPositionRequest {
  constructor() {
    this.handle = 0;
    this.relativeToObjectHandle = 0;
    this.position = new geometry_msgs.msg.Point();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetObjectPositionRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [relativeToObjectHandle]
    bufferInfo = _serializer.int32(obj.relativeToObjectHandle, bufferInfo);
    // Serialize message field [position]
    bufferInfo = geometry_msgs.msg.Point.serialize(obj.position, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetObjectPositionRequest
    let tmp;
    let len;
    let data = new simRosSetObjectPositionRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [relativeToObjectHandle]
    tmp = _deserializer.int32(buffer);
    data.relativeToObjectHandle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    tmp = geometry_msgs.msg.Point.deserialize(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetObjectPositionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5dc792cd46f351f94087b2840e1f4005';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    int32 relativeToObjectHandle
    geometry_msgs/Point position
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    `;
  }

};

class simRosSetObjectPositionResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetObjectPositionResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetObjectPositionResponse
    let tmp;
    let len;
    let data = new simRosSetObjectPositionResponse();
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
    return 'vrep_common/simRosSetObjectPositionResponse';
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
  Request: simRosSetObjectPositionRequest,
  Response: simRosSetObjectPositionResponse
};
