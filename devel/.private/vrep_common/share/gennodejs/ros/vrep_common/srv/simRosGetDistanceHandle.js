// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetDistanceHandleRequest {
  constructor() {
    this.distanceName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetDistanceHandleRequest
    // Serialize message field [distanceName]
    bufferInfo = _serializer.string(obj.distanceName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetDistanceHandleRequest
    let tmp;
    let len;
    let data = new simRosGetDistanceHandleRequest();
    // Deserialize message field [distanceName]
    tmp = _deserializer.string(buffer);
    data.distanceName = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetDistanceHandleRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '218566481395d1ececa0c02cd69f99ad';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string distanceName
    
    `;
  }

};

class simRosGetDistanceHandleResponse {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetDistanceHandleResponse
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetDistanceHandleResponse
    let tmp;
    let len;
    let data = new simRosGetDistanceHandleResponse();
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
    return 'vrep_common/simRosGetDistanceHandleResponse';
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
  Request: simRosGetDistanceHandleRequest,
  Response: simRosGetDistanceHandleResponse
};
