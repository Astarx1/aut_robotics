// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosLoadModelRequest {
  constructor() {
    this.fileName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosLoadModelRequest
    // Serialize message field [fileName]
    bufferInfo = _serializer.string(obj.fileName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosLoadModelRequest
    let tmp;
    let len;
    let data = new simRosLoadModelRequest();
    // Deserialize message field [fileName]
    tmp = _deserializer.string(buffer);
    data.fileName = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosLoadModelRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0c96d4662a80949a4927729271153923';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string fileName
    
    `;
  }

};

class simRosLoadModelResponse {
  constructor() {
    this.result = 0;
    this.baseHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosLoadModelResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [baseHandle]
    bufferInfo = _serializer.int32(obj.baseHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosLoadModelResponse
    let tmp;
    let len;
    let data = new simRosLoadModelResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [baseHandle]
    tmp = _deserializer.int32(buffer);
    data.baseHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosLoadModelResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e49038cfdf66770b813aa3b2dae39cef';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    int32 baseHandle
    
    
    `;
  }

};

module.exports = {
  Request: simRosLoadModelRequest,
  Response: simRosLoadModelResponse
};
