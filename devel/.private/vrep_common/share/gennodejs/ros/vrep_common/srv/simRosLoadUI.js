// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosLoadUIRequest {
  constructor() {
    this.fileName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosLoadUIRequest
    // Serialize message field [fileName]
    bufferInfo = _serializer.string(obj.fileName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosLoadUIRequest
    let tmp;
    let len;
    let data = new simRosLoadUIRequest();
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
    return 'vrep_common/simRosLoadUIRequest';
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

class simRosLoadUIResponse {
  constructor() {
    this.result = 0;
    this.uiHandles = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosLoadUIResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize the length for message field [uiHandles]
    bufferInfo = _serializer.uint32(obj.uiHandles.length, bufferInfo);
    // Serialize message field [uiHandles]
    obj.uiHandles.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosLoadUIResponse
    let tmp;
    let len;
    let data = new simRosLoadUIResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [uiHandles]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [uiHandles]
    data.uiHandles = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.uiHandles[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosLoadUIResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dbc9ef8fe09d5c1e08d19e5a63c8edb0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    int32[] uiHandles
    
    
    `;
  }

};

module.exports = {
  Request: simRosLoadUIRequest,
  Response: simRosLoadUIResponse
};
