// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetArrayParameterRequest {
  constructor() {
    this.parameter = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetArrayParameterRequest
    // Serialize message field [parameter]
    bufferInfo = _serializer.int32(obj.parameter, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetArrayParameterRequest
    let tmp;
    let len;
    let data = new simRosGetArrayParameterRequest();
    // Deserialize message field [parameter]
    tmp = _deserializer.int32(buffer);
    data.parameter = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetArrayParameterRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3b5e34835331aac7a9065c5abd204e3b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 parameter
    
    `;
  }

};

class simRosGetArrayParameterResponse {
  constructor() {
    this.result = 0;
    this.parameterValues = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetArrayParameterResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize the length for message field [parameterValues]
    bufferInfo = _serializer.uint32(obj.parameterValues.length, bufferInfo);
    // Serialize message field [parameterValues]
    obj.parameterValues.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetArrayParameterResponse
    let tmp;
    let len;
    let data = new simRosGetArrayParameterResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [parameterValues]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parameterValues]
    data.parameterValues = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.parameterValues[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetArrayParameterResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e497cd253c2e34372eda1afd9473563a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    float32[] parameterValues
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetArrayParameterRequest,
  Response: simRosGetArrayParameterResponse
};
