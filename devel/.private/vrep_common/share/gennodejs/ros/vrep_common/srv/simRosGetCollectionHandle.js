// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetCollectionHandleRequest {
  constructor() {
    this.collectionName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetCollectionHandleRequest
    // Serialize message field [collectionName]
    bufferInfo = _serializer.string(obj.collectionName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetCollectionHandleRequest
    let tmp;
    let len;
    let data = new simRosGetCollectionHandleRequest();
    // Deserialize message field [collectionName]
    tmp = _deserializer.string(buffer);
    data.collectionName = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetCollectionHandleRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9d3c7fc7ea894a7db97f5e243e4bf308';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string collectionName
    
    `;
  }

};

class simRosGetCollectionHandleResponse {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetCollectionHandleResponse
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetCollectionHandleResponse
    let tmp;
    let len;
    let data = new simRosGetCollectionHandleResponse();
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
    return 'vrep_common/simRosGetCollectionHandleResponse';
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
  Request: simRosGetCollectionHandleRequest,
  Response: simRosGetCollectionHandleResponse
};
