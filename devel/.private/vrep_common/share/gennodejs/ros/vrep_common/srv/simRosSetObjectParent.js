// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetObjectParentRequest {
  constructor() {
    this.handle = 0;
    this.parentHandle = 0;
    this.keepInPlace = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetObjectParentRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [parentHandle]
    bufferInfo = _serializer.int32(obj.parentHandle, bufferInfo);
    // Serialize message field [keepInPlace]
    bufferInfo = _serializer.uint8(obj.keepInPlace, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetObjectParentRequest
    let tmp;
    let len;
    let data = new simRosSetObjectParentRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parentHandle]
    tmp = _deserializer.int32(buffer);
    data.parentHandle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [keepInPlace]
    tmp = _deserializer.uint8(buffer);
    data.keepInPlace = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetObjectParentRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '057df40a9de4d47ccec6ccbbf3e67baa';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    int32 parentHandle
    uint8 keepInPlace
    
    `;
  }

};

class simRosSetObjectParentResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetObjectParentResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetObjectParentResponse
    let tmp;
    let len;
    let data = new simRosSetObjectParentResponse();
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
    return 'vrep_common/simRosSetObjectParentResponse';
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
  Request: simRosSetObjectParentRequest,
  Response: simRosSetObjectParentResponse
};
