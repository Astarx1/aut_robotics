// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosTransferFileRequest {
  constructor() {
    this.data = [];
    this.fileName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosTransferFileRequest
    // Serialize the length for message field [data]
    bufferInfo = _serializer.uint32(obj.data.length, bufferInfo);
    // Serialize message field [data]
    bufferInfo.buffer.push(obj.data);
    bufferInfo.length += obj.data.length;
    // Serialize message field [fileName]
    bufferInfo = _serializer.string(obj.fileName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosTransferFileRequest
    let tmp;
    let len;
    let data = new simRosTransferFileRequest();
    // Deserialize array length for message field [data]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [data]
    data.data = buffer.slice(0, len);
    buffer =  buffer.slice(len);
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
    return 'vrep_common/simRosTransferFileRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c8b761e9b02a5ad1aa85aa2c994c5e52';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    uint8[] data
    string fileName
    
    `;
  }

};

class simRosTransferFileResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosTransferFileResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosTransferFileResponse
    let tmp;
    let len;
    let data = new simRosTransferFileResponse();
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
    return 'vrep_common/simRosTransferFileResponse';
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
  Request: simRosTransferFileRequest,
  Response: simRosTransferFileResponse
};
