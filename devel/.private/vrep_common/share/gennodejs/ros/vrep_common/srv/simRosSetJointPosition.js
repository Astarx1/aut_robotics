// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetJointPositionRequest {
  constructor() {
    this.handle = 0;
    this.position = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetJointPositionRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [position]
    bufferInfo = _serializer.float64(obj.position, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetJointPositionRequest
    let tmp;
    let len;
    let data = new simRosSetJointPositionRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    tmp = _deserializer.float64(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetJointPositionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e628527e6b66a50ae279ed5e0b1eaea0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    float64 position
    
    `;
  }

};

class simRosSetJointPositionResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetJointPositionResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetJointPositionResponse
    let tmp;
    let len;
    let data = new simRosSetJointPositionResponse();
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
    return 'vrep_common/simRosSetJointPositionResponse';
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
  Request: simRosSetJointPositionRequest,
  Response: simRosSetJointPositionResponse
};
