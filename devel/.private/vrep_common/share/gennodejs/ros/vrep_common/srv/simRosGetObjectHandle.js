// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetObjectHandleRequest {
  constructor() {
    this.objectName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectHandleRequest
    // Serialize message field [objectName]
    bufferInfo = _serializer.string(obj.objectName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectHandleRequest
    let tmp;
    let len;
    let data = new simRosGetObjectHandleRequest();
    // Deserialize message field [objectName]
    tmp = _deserializer.string(buffer);
    data.objectName = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectHandleRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5d6700ec420d7f32e8dc7b117e3b8b51';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string objectName
    
    `;
  }

};

class simRosGetObjectHandleResponse {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectHandleResponse
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectHandleResponse
    let tmp;
    let len;
    let data = new simRosGetObjectHandleResponse();
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
    return 'vrep_common/simRosGetObjectHandleResponse';
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

module.exports = {
  Request: simRosGetObjectHandleRequest,
  Response: simRosGetObjectHandleResponse
};
