// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosCreateDummyRequest {
  constructor() {
    this.size = 0.0;
    this.colors = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosCreateDummyRequest
    // Serialize message field [size]
    bufferInfo = _serializer.float32(obj.size, bufferInfo);
    // Serialize the length for message field [colors]
    bufferInfo = _serializer.uint32(obj.colors.length, bufferInfo);
    // Serialize message field [colors]
    obj.colors.forEach((val) => {
      bufferInfo = _serializer.int8(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosCreateDummyRequest
    let tmp;
    let len;
    let data = new simRosCreateDummyRequest();
    // Deserialize message field [size]
    tmp = _deserializer.float32(buffer);
    data.size = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [colors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [colors]
    data.colors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int8(buffer);
      data.colors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosCreateDummyRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8b8d31e0e18b916960ddd10248b87e65';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    float32 size
    int8[] colors
    
    `;
  }

};

class simRosCreateDummyResponse {
  constructor() {
    this.dummyHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosCreateDummyResponse
    // Serialize message field [dummyHandle]
    bufferInfo = _serializer.int32(obj.dummyHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosCreateDummyResponse
    let tmp;
    let len;
    let data = new simRosCreateDummyResponse();
    // Deserialize message field [dummyHandle]
    tmp = _deserializer.int32(buffer);
    data.dummyHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosCreateDummyResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fce6fe642297751ba64c68708ffe9e6f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 dummyHandle
    
    
    
    `;
  }

};

module.exports = {
  Request: simRosCreateDummyRequest,
  Response: simRosCreateDummyResponse
};
