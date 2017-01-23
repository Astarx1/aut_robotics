// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetBooleanParameterRequest {
  constructor() {
    this.parameter = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetBooleanParameterRequest
    // Serialize message field [parameter]
    bufferInfo = _serializer.int32(obj.parameter, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetBooleanParameterRequest
    let tmp;
    let len;
    let data = new simRosGetBooleanParameterRequest();
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
    return 'vrep_common/simRosGetBooleanParameterRequest';
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

class simRosGetBooleanParameterResponse {
  constructor() {
    this.parameterValue = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetBooleanParameterResponse
    // Serialize message field [parameterValue]
    bufferInfo = _serializer.int32(obj.parameterValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetBooleanParameterResponse
    let tmp;
    let len;
    let data = new simRosGetBooleanParameterResponse();
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
    return 'vrep_common/simRosGetBooleanParameterResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '27eb22d33b5c07abc8d72f26edb19395';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 parameterValue
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetBooleanParameterRequest,
  Response: simRosGetBooleanParameterResponse
};
