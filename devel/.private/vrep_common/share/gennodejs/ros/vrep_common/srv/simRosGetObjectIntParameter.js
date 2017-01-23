// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetObjectIntParameterRequest {
  constructor() {
    this.handle = 0;
    this.parameterID = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectIntParameterRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [parameterID]
    bufferInfo = _serializer.int32(obj.parameterID, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectIntParameterRequest
    let tmp;
    let len;
    let data = new simRosGetObjectIntParameterRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parameterID]
    tmp = _deserializer.int32(buffer);
    data.parameterID = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectIntParameterRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '233ddb8f8f3678af5672087de7d603db';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    int32 parameterID
    
    `;
  }

};

class simRosGetObjectIntParameterResponse {
  constructor() {
    this.result = 0;
    this.parameterValue = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectIntParameterResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [parameterValue]
    bufferInfo = _serializer.int32(obj.parameterValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectIntParameterResponse
    let tmp;
    let len;
    let data = new simRosGetObjectIntParameterResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parameterValue]
    tmp = _deserializer.int32(buffer);
    data.parameterValue = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectIntParameterResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6c2f4c807e1ab6d671a7c18b9d47ce4a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    int32 parameterValue
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetObjectIntParameterRequest,
  Response: simRosGetObjectIntParameterResponse
};
