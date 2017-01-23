// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetStringSignalRequest {
  constructor() {
    this.signalName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetStringSignalRequest
    // Serialize message field [signalName]
    bufferInfo = _serializer.string(obj.signalName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetStringSignalRequest
    let tmp;
    let len;
    let data = new simRosGetStringSignalRequest();
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
    return 'vrep_common/simRosGetStringSignalRequest';
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

class simRosGetStringSignalResponse {
  constructor() {
    this.result = 0;
    this.signalValue = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetStringSignalResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [signalValue]
    bufferInfo = _serializer.string(obj.signalValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetStringSignalResponse
    let tmp;
    let len;
    let data = new simRosGetStringSignalResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [signalValue]
    tmp = _deserializer.string(buffer);
    data.signalValue = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetStringSignalResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'db26c269346c2452f7366e4e3eed9867';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    string signalValue
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetStringSignalRequest,
  Response: simRosGetStringSignalResponse
};
