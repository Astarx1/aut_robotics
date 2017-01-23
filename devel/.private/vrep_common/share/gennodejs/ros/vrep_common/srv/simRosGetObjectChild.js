// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetObjectChildRequest {
  constructor() {
    this.handle = 0;
    this.index = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectChildRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [index]
    bufferInfo = _serializer.int32(obj.index, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectChildRequest
    let tmp;
    let len;
    let data = new simRosGetObjectChildRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [index]
    tmp = _deserializer.int32(buffer);
    data.index = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectChildRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '38a6074f4ac9f6ddcbf3ed839a2974d2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    int32 index
    
    `;
  }

};

class simRosGetObjectChildResponse {
  constructor() {
    this.childHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectChildResponse
    // Serialize message field [childHandle]
    bufferInfo = _serializer.int32(obj.childHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectChildResponse
    let tmp;
    let len;
    let data = new simRosGetObjectChildResponse();
    // Deserialize message field [childHandle]
    tmp = _deserializer.int32(buffer);
    data.childHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectChildResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'efe17144606e0d5454d7698cb2bf24b7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 childHandle
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetObjectChildRequest,
  Response: simRosGetObjectChildResponse
};
