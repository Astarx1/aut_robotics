// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetFloatSignalRequest {
  constructor() {
    this.signalName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetFloatSignalRequest
    // Serialize message field [signalName]
    bufferInfo = _serializer.string(obj.signalName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetFloatSignalRequest
    let tmp;
    let len;
    let data = new simRosGetFloatSignalRequest();
    // Deserialize message field [signalName]
    tmp = _deserializer.string(buffer);
    data.signalName = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetFloatSignalRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '00c43203ad474c6ce746089e83166bba';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string signalName
    
    `;
  }

};

class simRosGetFloatSignalResponse {
  constructor() {
    this.result = 0;
    this.signalValue = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetFloatSignalResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [signalValue]
    bufferInfo = _serializer.float32(obj.signalValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetFloatSignalResponse
    let tmp;
    let len;
    let data = new simRosGetFloatSignalResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [signalValue]
    tmp = _deserializer.float32(buffer);
    data.signalValue = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetFloatSignalResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd8f2b92b89d5cf88cbffea18b9ddcc7d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    float32 signalValue
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetFloatSignalRequest,
  Response: simRosGetFloatSignalResponse
};
