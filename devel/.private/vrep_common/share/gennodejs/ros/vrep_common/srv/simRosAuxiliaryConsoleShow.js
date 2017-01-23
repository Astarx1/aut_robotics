// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosAuxiliaryConsoleShowRequest {
  constructor() {
    this.consoleHandle = 0;
    this.showState = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosAuxiliaryConsoleShowRequest
    // Serialize message field [consoleHandle]
    bufferInfo = _serializer.int32(obj.consoleHandle, bufferInfo);
    // Serialize message field [showState]
    bufferInfo = _serializer.uint8(obj.showState, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosAuxiliaryConsoleShowRequest
    let tmp;
    let len;
    let data = new simRosAuxiliaryConsoleShowRequest();
    // Deserialize message field [consoleHandle]
    tmp = _deserializer.int32(buffer);
    data.consoleHandle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [showState]
    tmp = _deserializer.uint8(buffer);
    data.showState = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosAuxiliaryConsoleShowRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '33c6dd3e6b401d1a7bd21ef7d25dc9e5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 consoleHandle
    uint8 showState
    
    `;
  }

};

class simRosAuxiliaryConsoleShowResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosAuxiliaryConsoleShowResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosAuxiliaryConsoleShowResponse
    let tmp;
    let len;
    let data = new simRosAuxiliaryConsoleShowResponse();
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
    return 'vrep_common/simRosAuxiliaryConsoleShowResponse';
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
  Request: simRosAuxiliaryConsoleShowRequest,
  Response: simRosAuxiliaryConsoleShowResponse
};
