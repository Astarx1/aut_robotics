// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetVisionSensorDepthBufferRequest {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetVisionSensorDepthBufferRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetVisionSensorDepthBufferRequest
    let tmp;
    let len;
    let data = new simRosGetVisionSensorDepthBufferRequest();
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
    return 'vrep_common/simRosGetVisionSensorDepthBufferRequest';
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

class simRosGetVisionSensorDepthBufferResponse {
  constructor() {
    this.result = 0;
    this.resolution = [];
    this.buffer = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetVisionSensorDepthBufferResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize the length for message field [resolution]
    bufferInfo = _serializer.uint32(obj.resolution.length, bufferInfo);
    // Serialize message field [resolution]
    obj.resolution.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [buffer]
    bufferInfo = _serializer.uint32(obj.buffer.length, bufferInfo);
    // Serialize message field [buffer]
    obj.buffer.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetVisionSensorDepthBufferResponse
    let tmp;
    let len;
    let data = new simRosGetVisionSensorDepthBufferResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [resolution]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [resolution]
    data.resolution = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.resolution[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [buffer]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [buffer]
    data.buffer = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.buffer[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetVisionSensorDepthBufferResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f3b6a80ea60fe51df97a2b740bd21976';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    int32[] resolution
    float32[] buffer
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetVisionSensorDepthBufferRequest,
  Response: simRosGetVisionSensorDepthBufferResponse
};
