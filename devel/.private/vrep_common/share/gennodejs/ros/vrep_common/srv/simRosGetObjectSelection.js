// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetObjectSelectionRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectSelectionRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectSelectionRequest
    let tmp;
    let len;
    let data = new simRosGetObjectSelectionRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectSelectionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    `;
  }

};

class simRosGetObjectSelectionResponse {
  constructor() {
    this.handles = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectSelectionResponse
    // Serialize the length for message field [handles]
    bufferInfo = _serializer.uint32(obj.handles.length, bufferInfo);
    // Serialize message field [handles]
    obj.handles.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectSelectionResponse
    let tmp;
    let len;
    let data = new simRosGetObjectSelectionResponse();
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
    return 'vrep_common/simRosGetObjectSelectionResponse';
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

module.exports = {
  Request: simRosGetObjectSelectionRequest,
  Response: simRosGetObjectSelectionResponse
};
