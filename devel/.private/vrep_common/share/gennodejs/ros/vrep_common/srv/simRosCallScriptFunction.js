// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosCallScriptFunctionRequest {
  constructor() {
    this.functionNameAtObjectName = '';
    this.scriptHandleOrType = 0;
    this.inputInts = [];
    this.inputFloats = [];
    this.inputStrings = [];
    this.inputBuffer = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosCallScriptFunctionRequest
    // Serialize message field [functionNameAtObjectName]
    bufferInfo = _serializer.string(obj.functionNameAtObjectName, bufferInfo);
    // Serialize message field [scriptHandleOrType]
    bufferInfo = _serializer.int32(obj.scriptHandleOrType, bufferInfo);
    // Serialize the length for message field [inputInts]
    bufferInfo = _serializer.uint32(obj.inputInts.length, bufferInfo);
    // Serialize message field [inputInts]
    obj.inputInts.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [inputFloats]
    bufferInfo = _serializer.uint32(obj.inputFloats.length, bufferInfo);
    // Serialize message field [inputFloats]
    obj.inputFloats.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [inputStrings]
    bufferInfo = _serializer.uint32(obj.inputStrings.length, bufferInfo);
    // Serialize message field [inputStrings]
    obj.inputStrings.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [inputBuffer]
    bufferInfo = _serializer.string(obj.inputBuffer, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosCallScriptFunctionRequest
    let tmp;
    let len;
    let data = new simRosCallScriptFunctionRequest();
    // Deserialize message field [functionNameAtObjectName]
    tmp = _deserializer.string(buffer);
    data.functionNameAtObjectName = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scriptHandleOrType]
    tmp = _deserializer.int32(buffer);
    data.scriptHandleOrType = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [inputInts]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [inputInts]
    data.inputInts = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.inputInts[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [inputFloats]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [inputFloats]
    data.inputFloats = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.inputFloats[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [inputStrings]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [inputStrings]
    data.inputStrings = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.inputStrings[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [inputBuffer]
    tmp = _deserializer.string(buffer);
    data.inputBuffer = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosCallScriptFunctionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e13770ffacc84bd3ba12cae1ce2b7f0e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string functionNameAtObjectName
    int32 scriptHandleOrType
    int32[] inputInts
    float32[] inputFloats
    string[] inputStrings
    string inputBuffer
    
    `;
  }

};

class simRosCallScriptFunctionResponse {
  constructor() {
    this.result = 0;
    this.outputInts = [];
    this.outputFloats = [];
    this.outputStrings = [];
    this.outputBuffer = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosCallScriptFunctionResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize the length for message field [outputInts]
    bufferInfo = _serializer.uint32(obj.outputInts.length, bufferInfo);
    // Serialize message field [outputInts]
    obj.outputInts.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [outputFloats]
    bufferInfo = _serializer.uint32(obj.outputFloats.length, bufferInfo);
    // Serialize message field [outputFloats]
    obj.outputFloats.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [outputStrings]
    bufferInfo = _serializer.uint32(obj.outputStrings.length, bufferInfo);
    // Serialize message field [outputStrings]
    obj.outputStrings.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [outputBuffer]
    bufferInfo = _serializer.string(obj.outputBuffer, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosCallScriptFunctionResponse
    let tmp;
    let len;
    let data = new simRosCallScriptFunctionResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [outputInts]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [outputInts]
    data.outputInts = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.outputInts[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [outputFloats]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [outputFloats]
    data.outputFloats = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.outputFloats[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [outputStrings]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [outputStrings]
    data.outputStrings = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.outputStrings[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [outputBuffer]
    tmp = _deserializer.string(buffer);
    data.outputBuffer = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosCallScriptFunctionResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e480f0a77cf736301c4dc7f71265e882';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    int32[] outputInts
    float32[] outputFloats
    string[] outputStrings
    string outputBuffer
    
    
    `;
  }

};

module.exports = {
  Request: simRosCallScriptFunctionRequest,
  Response: simRosCallScriptFunctionResponse
};
