// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosAuxiliaryConsolePrintRequest {
  constructor() {
    this.consoleHandle = 0;
    this.text = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosAuxiliaryConsolePrintRequest
    // Serialize message field [consoleHandle]
    bufferInfo = _serializer.int32(obj.consoleHandle, bufferInfo);
    // Serialize message field [text]
    bufferInfo = _serializer.string(obj.text, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosAuxiliaryConsolePrintRequest
    let tmp;
    let len;
    let data = new simRosAuxiliaryConsolePrintRequest();
    // Deserialize message field [consoleHandle]
    tmp = _deserializer.int32(buffer);
    data.consoleHandle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [text]
    tmp = _deserializer.string(buffer);
    data.text = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosAuxiliaryConsolePrintRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '01b8405a29eed17e1ac8fe2b1db7c0a0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 consoleHandle
    string text
    
    `;
  }

};

class simRosAuxiliaryConsolePrintResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosAuxiliaryConsolePrintResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosAuxiliaryConsolePrintResponse
    let tmp;
    let len;
    let data = new simRosAuxiliaryConsolePrintResponse();
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
    return 'vrep_common/simRosAuxiliaryConsolePrintResponse';
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
  Request: simRosAuxiliaryConsolePrintRequest,
  Response: simRosAuxiliaryConsolePrintResponse
};
