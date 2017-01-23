// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetModelPropertyRequest {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetModelPropertyRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetModelPropertyRequest
    let tmp;
    let len;
    let data = new simRosGetModelPropertyRequest();
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
    return 'vrep_common/simRosGetModelPropertyRequest';
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

class simRosGetModelPropertyResponse {
  constructor() {
    this.propertyValue = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetModelPropertyResponse
    // Serialize message field [propertyValue]
    bufferInfo = _serializer.int32(obj.propertyValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetModelPropertyResponse
    let tmp;
    let len;
    let data = new simRosGetModelPropertyResponse();
    // Deserialize message field [propertyValue]
    tmp = _deserializer.int32(buffer);
    data.propertyValue = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetModelPropertyResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a3ff7a3737260dba8d61537cf18cc60a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 propertyValue
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetModelPropertyRequest,
  Response: simRosGetModelPropertyResponse
};
