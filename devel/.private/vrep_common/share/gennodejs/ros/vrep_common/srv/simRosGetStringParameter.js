// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetStringParameterRequest {
  constructor() {
    this.parameter = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetStringParameterRequest
    // Serialize message field [parameter]
    bufferInfo = _serializer.int32(obj.parameter, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetStringParameterRequest
    let tmp;
    let len;
    let data = new simRosGetStringParameterRequest();
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
    return 'vrep_common/simRosGetStringParameterRequest';
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

class simRosGetStringParameterResponse {
  constructor() {
    this.result = 0;
    this.parameterValue = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetStringParameterResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [parameterValue]
    bufferInfo = _serializer.string(obj.parameterValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetStringParameterResponse
    let tmp;
    let len;
    let data = new simRosGetStringParameterResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parameterValue]
    tmp = _deserializer.string(buffer);
    data.parameterValue = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetStringParameterResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '277afce6922cf13c8f31ca56b4f64e0b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    string parameterValue
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetStringParameterRequest,
  Response: simRosGetStringParameterResponse
};
