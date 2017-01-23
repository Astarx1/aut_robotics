// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetJointStateRequest {
  constructor() {
    this.handles = [];
    this.setModes = [];
    this.values = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetJointStateRequest
    // Serialize the length for message field [handles]
    bufferInfo = _serializer.uint32(obj.handles.length, bufferInfo);
    // Serialize message field [handles]
    obj.handles.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [setModes]
    bufferInfo = _serializer.uint32(obj.setModes.length, bufferInfo);
    // Serialize message field [setModes]
    bufferInfo.buffer.push(obj.setModes);
    bufferInfo.length += obj.setModes.length;
    // Serialize the length for message field [values]
    bufferInfo = _serializer.uint32(obj.values.length, bufferInfo);
    // Serialize message field [values]
    obj.values.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetJointStateRequest
    let tmp;
    let len;
    let data = new simRosSetJointStateRequest();
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
    // Deserialize array length for message field [setModes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [setModes]
    data.setModes = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    // Deserialize array length for message field [values]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [values]
    data.values = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.values[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetJointStateRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '321f1f7210ed1893ea6a335b3eae0c68';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32[] handles
    uint8[] setModes
    float32[] values
    
    `;
  }

};

class simRosSetJointStateResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetJointStateResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetJointStateResponse
    let tmp;
    let len;
    let data = new simRosSetJointStateResponse();
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
    return 'vrep_common/simRosSetJointStateResponse';
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
  Request: simRosSetJointStateRequest,
  Response: simRosSetJointStateResponse
};
