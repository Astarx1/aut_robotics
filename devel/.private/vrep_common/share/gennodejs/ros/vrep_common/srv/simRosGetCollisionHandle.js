// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetCollisionHandleRequest {
  constructor() {
    this.collisionName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetCollisionHandleRequest
    // Serialize message field [collisionName]
    bufferInfo = _serializer.string(obj.collisionName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetCollisionHandleRequest
    let tmp;
    let len;
    let data = new simRosGetCollisionHandleRequest();
    // Deserialize message field [collisionName]
    tmp = _deserializer.string(buffer);
    data.collisionName = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetCollisionHandleRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cf86508d9f797a77ca9b0cab99fc61ca';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string collisionName
    
    `;
  }

};

class simRosGetCollisionHandleResponse {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetCollisionHandleResponse
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetCollisionHandleResponse
    let tmp;
    let len;
    let data = new simRosGetCollisionHandleResponse();
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
    return 'vrep_common/simRosGetCollisionHandleResponse';
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
  Request: simRosGetCollisionHandleRequest,
  Response: simRosGetCollisionHandleResponse
};
