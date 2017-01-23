// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetJointTargetVelocityRequest {
  constructor() {
    this.handle = 0;
    this.targetVelocity = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetJointTargetVelocityRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [targetVelocity]
    bufferInfo = _serializer.float64(obj.targetVelocity, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetJointTargetVelocityRequest
    let tmp;
    let len;
    let data = new simRosSetJointTargetVelocityRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [targetVelocity]
    tmp = _deserializer.float64(buffer);
    data.targetVelocity = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetJointTargetVelocityRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a3f4b46893a91525225ffda04544130e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    float64 targetVelocity
    
    `;
  }

};

class simRosSetJointTargetVelocityResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetJointTargetVelocityResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetJointTargetVelocityResponse
    let tmp;
    let len;
    let data = new simRosSetJointTargetVelocityResponse();
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
    return 'vrep_common/simRosSetJointTargetVelocityResponse';
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
  Request: simRosSetJointTargetVelocityRequest,
  Response: simRosSetJointTargetVelocityResponse
};
