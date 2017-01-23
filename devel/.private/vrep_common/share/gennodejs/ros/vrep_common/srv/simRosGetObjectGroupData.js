// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetObjectGroupDataRequest {
  constructor() {
    this.objectType = 0;
    this.dataType = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectGroupDataRequest
    // Serialize message field [objectType]
    bufferInfo = _serializer.int32(obj.objectType, bufferInfo);
    // Serialize message field [dataType]
    bufferInfo = _serializer.int32(obj.dataType, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectGroupDataRequest
    let tmp;
    let len;
    let data = new simRosGetObjectGroupDataRequest();
    // Deserialize message field [objectType]
    tmp = _deserializer.int32(buffer);
    data.objectType = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dataType]
    tmp = _deserializer.int32(buffer);
    data.dataType = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectGroupDataRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f25e144fb8e81818d3b3ee5f47698859';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 objectType
    int32 dataType
    
    `;
  }

};

class simRosGetObjectGroupDataResponse {
  constructor() {
    this.handles = [];
    this.intData = [];
    this.floatData = [];
    this.strings = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectGroupDataResponse
    // Serialize the length for message field [handles]
    bufferInfo = _serializer.uint32(obj.handles.length, bufferInfo);
    // Serialize message field [handles]
    obj.handles.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [intData]
    bufferInfo = _serializer.uint32(obj.intData.length, bufferInfo);
    // Serialize message field [intData]
    obj.intData.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [floatData]
    bufferInfo = _serializer.uint32(obj.floatData.length, bufferInfo);
    // Serialize message field [floatData]
    obj.floatData.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [strings]
    bufferInfo = _serializer.uint32(obj.strings.length, bufferInfo);
    // Serialize message field [strings]
    obj.strings.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectGroupDataResponse
    let tmp;
    let len;
    let data = new simRosGetObjectGroupDataResponse();
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
    // Deserialize array length for message field [intData]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [intData]
    data.intData = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.intData[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [floatData]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [floatData]
    data.floatData = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.floatData[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [strings]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [strings]
    data.strings = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.strings[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectGroupDataResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '072add4d453cc4563363975eb4c48cf2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32[] handles
    int32[] intData
    float32[] floatData
    string[] strings
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetObjectGroupDataRequest,
  Response: simRosGetObjectGroupDataResponse
};
