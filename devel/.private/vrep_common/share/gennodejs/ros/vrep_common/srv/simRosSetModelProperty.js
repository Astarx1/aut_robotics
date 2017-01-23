// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetModelPropertyRequest {
  constructor() {
    this.handle = 0;
    this.propertyValue = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetModelPropertyRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [propertyValue]
    bufferInfo = _serializer.int32(obj.propertyValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetModelPropertyRequest
    let tmp;
    let len;
    let data = new simRosSetModelPropertyRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
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
    return 'vrep_common/simRosSetModelPropertyRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c1dfc3d3e983651365795ed48e7ad342';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    int32 propertyValue
    
    `;
  }

};

class simRosSetModelPropertyResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetModelPropertyResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetModelPropertyResponse
    let tmp;
    let len;
    let data = new simRosSetModelPropertyResponse();
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
    return 'vrep_common/simRosSetModelPropertyResponse';
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
  Request: simRosSetModelPropertyRequest,
  Response: simRosSetModelPropertyResponse
};
