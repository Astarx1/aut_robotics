// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosCopyPasteObjectsRequest {
  constructor() {
    this.objectHandles = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosCopyPasteObjectsRequest
    // Serialize the length for message field [objectHandles]
    bufferInfo = _serializer.uint32(obj.objectHandles.length, bufferInfo);
    // Serialize message field [objectHandles]
    obj.objectHandles.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosCopyPasteObjectsRequest
    let tmp;
    let len;
    let data = new simRosCopyPasteObjectsRequest();
    // Deserialize array length for message field [objectHandles]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [objectHandles]
    data.objectHandles = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.objectHandles[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosCopyPasteObjectsRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '185cb01118006e816646e4234283fa15';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32[] objectHandles
    
    `;
  }

};

class simRosCopyPasteObjectsResponse {
  constructor() {
    this.result = 0;
    this.newObjectHandles = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosCopyPasteObjectsResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize the length for message field [newObjectHandles]
    bufferInfo = _serializer.uint32(obj.newObjectHandles.length, bufferInfo);
    // Serialize message field [newObjectHandles]
    obj.newObjectHandles.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosCopyPasteObjectsResponse
    let tmp;
    let len;
    let data = new simRosCopyPasteObjectsResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [newObjectHandles]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [newObjectHandles]
    data.newObjectHandles = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.newObjectHandles[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosCopyPasteObjectsResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '33b2dafaeb9036bc8402196ac964ff11';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    int32[] newObjectHandles
    
    
    `;
  }

};

module.exports = {
  Request: simRosCopyPasteObjectsRequest,
  Response: simRosCopyPasteObjectsResponse
};
