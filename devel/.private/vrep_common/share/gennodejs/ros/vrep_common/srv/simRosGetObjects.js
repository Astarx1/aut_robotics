// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetObjectsRequest {
  constructor() {
    this.objectType = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectsRequest
    // Serialize message field [objectType]
    bufferInfo = _serializer.int32(obj.objectType, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectsRequest
    let tmp;
    let len;
    let data = new simRosGetObjectsRequest();
    // Deserialize message field [objectType]
    tmp = _deserializer.int32(buffer);
    data.objectType = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectsRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f18b65c1a814107158daa3b6bc83f24b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 objectType
    
    `;
  }

};

class simRosGetObjectsResponse {
  constructor() {
    this.result = 0;
    this.handles = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectsResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize the length for message field [handles]
    bufferInfo = _serializer.uint32(obj.handles.length, bufferInfo);
    // Serialize message field [handles]
    obj.handles.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectsResponse
    let tmp;
    let len;
    let data = new simRosGetObjectsResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [handles]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [handles]
    data.handles = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.handles[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectsResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2caeb9c40c89c5010410e3fd89796315';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    int32[] handles
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetObjectsRequest,
  Response: simRosGetObjectsResponse
};
