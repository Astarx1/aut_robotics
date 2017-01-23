// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetObjectParentRequest {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectParentRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectParentRequest
    let tmp;
    let len;
    let data = new simRosGetObjectParentRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectParentRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '92535b678299d2bdda959704e78c275e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    
    `;
  }

};

class simRosGetObjectParentResponse {
  constructor() {
    this.parentHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectParentResponse
    // Serialize message field [parentHandle]
    bufferInfo = _serializer.int32(obj.parentHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectParentResponse
    let tmp;
    let len;
    let data = new simRosGetObjectParentResponse();
    // Deserialize message field [parentHandle]
    tmp = _deserializer.int32(buffer);
    data.parentHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectParentResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3297095044ad4bf50ba768911050d931';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 parentHandle
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetObjectParentRequest,
  Response: simRosGetObjectParentResponse
};
