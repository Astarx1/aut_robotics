// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetBooleanParameterRequest {
  constructor() {
    this.parameter = 0;
    this.parameterValue = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetBooleanParameterRequest
    // Serialize message field [parameter]
    bufferInfo = _serializer.int32(obj.parameter, bufferInfo);
    // Serialize message field [parameterValue]
    bufferInfo = _serializer.uint8(obj.parameterValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetBooleanParameterRequest
    let tmp;
    let len;
    let data = new simRosSetBooleanParameterRequest();
    // Deserialize message field [parameter]
    tmp = _deserializer.int32(buffer);
    data.parameter = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parameterValue]
    tmp = _deserializer.uint8(buffer);
    data.parameterValue = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetBooleanParameterRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '10fa8f42f19dd4cbb2be19bb12f6a724';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 parameter
    uint8 parameterValue
    
    `;
  }

};

class simRosSetBooleanParameterResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetBooleanParameterResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetBooleanParameterResponse
    let tmp;
    let len;
    let data = new simRosSetBooleanParameterResponse();
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
    return 'vrep_common/simRosSetBooleanParameterResponse';
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
  Request: simRosSetBooleanParameterRequest,
  Response: simRosSetBooleanParameterResponse
};
