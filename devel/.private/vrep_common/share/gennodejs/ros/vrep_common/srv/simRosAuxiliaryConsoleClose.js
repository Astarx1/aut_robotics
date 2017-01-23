// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosAuxiliaryConsoleCloseRequest {
  constructor() {
    this.consoleHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosAuxiliaryConsoleCloseRequest
    // Serialize message field [consoleHandle]
    bufferInfo = _serializer.int32(obj.consoleHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosAuxiliaryConsoleCloseRequest
    let tmp;
    let len;
    let data = new simRosAuxiliaryConsoleCloseRequest();
    // Deserialize message field [consoleHandle]
    tmp = _deserializer.int32(buffer);
    data.consoleHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosAuxiliaryConsoleCloseRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0712f8f971970cd49793e7755140f018';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 consoleHandle
    
    `;
  }

};

class simRosAuxiliaryConsoleCloseResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosAuxiliaryConsoleCloseResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosAuxiliaryConsoleCloseResponse
    let tmp;
    let len;
    let data = new simRosAuxiliaryConsoleCloseResponse();
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
    return 'vrep_common/simRosAuxiliaryConsoleCloseResponse';
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
  Request: simRosAuxiliaryConsoleCloseRequest,
  Response: simRosAuxiliaryConsoleCloseResponse
};
