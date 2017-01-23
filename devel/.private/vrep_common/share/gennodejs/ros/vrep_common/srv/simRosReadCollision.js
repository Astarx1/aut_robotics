// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosReadCollisionRequest {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosReadCollisionRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosReadCollisionRequest
    let tmp;
    let len;
    let data = new simRosReadCollisionRequest();
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
    return 'vrep_common/simRosReadCollisionRequest';
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

class simRosReadCollisionResponse {
  constructor() {
    this.collisionState = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosReadCollisionResponse
    // Serialize message field [collisionState]
    bufferInfo = _serializer.int32(obj.collisionState, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosReadCollisionResponse
    let tmp;
    let len;
    let data = new simRosReadCollisionResponse();
    // Deserialize message field [collisionState]
    tmp = _deserializer.int32(buffer);
    data.collisionState = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosReadCollisionResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a2907c10b125ac1a987b8b14c578e5f6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 collisionState
    
    
    `;
  }

};

module.exports = {
  Request: simRosReadCollisionRequest,
  Response: simRosReadCollisionResponse
};
