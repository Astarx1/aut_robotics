// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosReadProximitySensorRequest {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosReadProximitySensorRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosReadProximitySensorRequest
    let tmp;
    let len;
    let data = new simRosReadProximitySensorRequest();
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
    return 'vrep_common/simRosReadProximitySensorRequest';
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

class simRosReadProximitySensorResponse {
  constructor() {
    this.result = 0;
    this.detectedPoint = [];
    this.detectedObject = 0;
    this.normalVector = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosReadProximitySensorResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize the length for message field [detectedPoint]
    bufferInfo = _serializer.uint32(obj.detectedPoint.length, bufferInfo);
    // Serialize message field [detectedPoint]
    obj.detectedPoint.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize message field [detectedObject]
    bufferInfo = _serializer.int32(obj.detectedObject, bufferInfo);
    // Serialize the length for message field [normalVector]
    bufferInfo = _serializer.uint32(obj.normalVector.length, bufferInfo);
    // Serialize message field [normalVector]
    obj.normalVector.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosReadProximitySensorResponse
    let tmp;
    let len;
    let data = new simRosReadProximitySensorResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [detectedPoint]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [detectedPoint]
    data.detectedPoint = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.detectedPoint[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [detectedObject]
    tmp = _deserializer.int32(buffer);
    data.detectedObject = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [normalVector]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [normalVector]
    data.normalVector = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.normalVector[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosReadProximitySensorResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6d96957b6da2491c9e2ffcfcd60996ad';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    float32[] detectedPoint
    int32 detectedObject
    float32[] normalVector
    
    
    `;
  }

};

module.exports = {
  Request: simRosReadProximitySensorRequest,
  Response: simRosReadProximitySensorResponse
};
