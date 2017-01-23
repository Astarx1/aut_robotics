// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetObjectFloatParameterRequest {
  constructor() {
    this.handle = 0;
    this.parameterID = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectFloatParameterRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [parameterID]
    bufferInfo = _serializer.int32(obj.parameterID, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectFloatParameterRequest
    let tmp;
    let len;
    let data = new simRosGetObjectFloatParameterRequest();
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
    return 'vrep_common/simRosGetObjectFloatParameterRequest';
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

class simRosGetObjectFloatParameterResponse {
  constructor() {
    this.result = 0;
    this.parameterValue = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetObjectFloatParameterResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [parameterValue]
    bufferInfo = _serializer.float32(obj.parameterValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetObjectFloatParameterResponse
    let tmp;
    let len;
    let data = new simRosGetObjectFloatParameterResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parameterValue]
    tmp = _deserializer.float32(buffer);
    data.parameterValue = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetObjectFloatParameterResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4f3b3d2d178d987bbf7b54667db48dc8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    float32 parameterValue
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetObjectFloatParameterRequest,
  Response: simRosGetObjectFloatParameterResponse
};
