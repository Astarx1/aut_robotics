// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetJointTargetPositionRequest {
  constructor() {
    this.handle = 0;
    this.targetPosition = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetJointTargetPositionRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [targetPosition]
    bufferInfo = _serializer.float64(obj.targetPosition, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetJointTargetPositionRequest
    let tmp;
    let len;
    let data = new simRosSetJointTargetPositionRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [targetPosition]
    tmp = _deserializer.float64(buffer);
    data.targetPosition = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetJointTargetPositionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6485fab2027885fabc22e244511b58c0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    float64 targetPosition
    
    `;
  }

};

class simRosSetJointTargetPositionResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetJointTargetPositionResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetJointTargetPositionResponse
    let tmp;
    let len;
    let data = new simRosSetJointTargetPositionResponse();
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
    return 'vrep_common/simRosSetJointTargetPositionResponse';
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
  Request: simRosSetJointTargetPositionRequest,
  Response: simRosSetJointTargetPositionResponse
};
