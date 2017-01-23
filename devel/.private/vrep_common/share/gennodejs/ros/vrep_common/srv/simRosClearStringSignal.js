// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosClearStringSignalRequest {
  constructor() {
    this.signalName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosClearStringSignalRequest
    // Serialize message field [signalName]
    bufferInfo = _serializer.string(obj.signalName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosClearStringSignalRequest
    let tmp;
    let len;
    let data = new simRosClearStringSignalRequest();
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
    return 'vrep_common/simRosClearStringSignalRequest';
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

class simRosClearStringSignalResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosClearStringSignalResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosClearStringSignalResponse
    let tmp;
    let len;
    let data = new simRosClearStringSignalResponse();
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
    return 'vrep_common/simRosClearStringSignalResponse';
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
  Request: simRosClearStringSignalRequest,
  Response: simRosClearStringSignalResponse
};
