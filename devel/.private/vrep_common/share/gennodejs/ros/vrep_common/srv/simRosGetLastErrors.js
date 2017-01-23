// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetLastErrorsRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetLastErrorsRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetLastErrorsRequest
    let tmp;
    let len;
    let data = new simRosGetLastErrorsRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetLastErrorsRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    
    `;
  }

};

class simRosGetLastErrorsResponse {
  constructor() {
    this.errorCnt = 0;
    this.errorStrings = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetLastErrorsResponse
    // Serialize message field [errorCnt]
    bufferInfo = _serializer.int32(obj.errorCnt, bufferInfo);
    // Serialize message field [errorStrings]
    bufferInfo = _serializer.string(obj.errorStrings, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetLastErrorsResponse
    let tmp;
    let len;
    let data = new simRosGetLastErrorsResponse();
    // Deserialize message field [errorCnt]
    tmp = _deserializer.int32(buffer);
    data.errorCnt = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [errorStrings]
    tmp = _deserializer.string(buffer);
    data.errorStrings = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetLastErrorsResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '165502f1a9cdf7b50941ef103382dea5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 errorCnt
    string errorStrings
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetLastErrorsRequest,
  Response: simRosGetLastErrorsResponse
};
