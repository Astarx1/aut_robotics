// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosReadVisionSensorRequest {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosReadVisionSensorRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosReadVisionSensorRequest
    let tmp;
    let len;
    let data = new simRosReadVisionSensorRequest();
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
    return 'vrep_common/simRosReadVisionSensorRequest';
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

class simRosReadVisionSensorResponse {
  constructor() {
    this.result = 0;
    this.packetData = [];
    this.packetSizes = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosReadVisionSensorResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize the length for message field [packetData]
    bufferInfo = _serializer.uint32(obj.packetData.length, bufferInfo);
    // Serialize message field [packetData]
    obj.packetData.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [packetSizes]
    bufferInfo = _serializer.uint32(obj.packetSizes.length, bufferInfo);
    // Serialize message field [packetSizes]
    obj.packetSizes.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosReadVisionSensorResponse
    let tmp;
    let len;
    let data = new simRosReadVisionSensorResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [packetData]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [packetData]
    data.packetData = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.packetData[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [packetSizes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [packetSizes]
    data.packetSizes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.packetSizes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosReadVisionSensorResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a46558cdf2ec9ef5fe9ba6ee4605c6bc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    float32[] packetData
    int32[] packetSizes
    
    
    `;
  }

};

module.exports = {
  Request: simRosReadVisionSensorRequest,
  Response: simRosReadVisionSensorResponse
};
