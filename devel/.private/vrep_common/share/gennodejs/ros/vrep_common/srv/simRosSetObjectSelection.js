// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetObjectSelectionRequest {
  constructor() {
    this.handles = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetObjectSelectionRequest
    // Serialize the length for message field [handles]
    bufferInfo = _serializer.uint32(obj.handles.length, bufferInfo);
    // Serialize message field [handles]
    obj.handles.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetObjectSelectionRequest
    let tmp;
    let len;
    let data = new simRosSetObjectSelectionRequest();
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
    return 'vrep_common/simRosSetObjectSelectionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1b24af430705cefc484ff6cc1c5669ad';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32[] handles
    
    `;
  }

};

class simRosSetObjectSelectionResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetObjectSelectionResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetObjectSelectionResponse
    let tmp;
    let len;
    let data = new simRosSetObjectSelectionResponse();
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
    return 'vrep_common/simRosSetObjectSelectionResponse';
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
  Request: simRosSetObjectSelectionRequest,
  Response: simRosSetObjectSelectionResponse
};
