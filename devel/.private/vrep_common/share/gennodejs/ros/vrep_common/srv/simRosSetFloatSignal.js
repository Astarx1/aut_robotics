// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetFloatSignalRequest {
  constructor() {
    this.signalName = '';
    this.signalValue = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetFloatSignalRequest
    // Serialize message field [signalName]
    bufferInfo = _serializer.string(obj.signalName, bufferInfo);
    // Serialize message field [signalValue]
    bufferInfo = _serializer.float32(obj.signalValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetFloatSignalRequest
    let tmp;
    let len;
    let data = new simRosSetFloatSignalRequest();
    // Deserialize message field [signalName]
    tmp = _deserializer.string(buffer);
    data.signalName = tmp.data;
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
    return 'vrep_common/simRosSetFloatSignalRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd5852bc1222618cb3febad3af2c233d1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string signalName
    float32 signalValue
    
    `;
  }

};

class simRosSetFloatSignalResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetFloatSignalResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetFloatSignalResponse
    let tmp;
    let len;
    let data = new simRosSetFloatSignalResponse();
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
    return 'vrep_common/simRosSetFloatSignalResponse';
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
  Request: simRosSetFloatSignalRequest,
  Response: simRosSetFloatSignalResponse
};
