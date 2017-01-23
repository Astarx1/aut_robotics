// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetFloatingParameterRequest {
  constructor() {
    this.parameter = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetFloatingParameterRequest
    // Serialize message field [parameter]
    bufferInfo = _serializer.int32(obj.parameter, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetFloatingParameterRequest
    let tmp;
    let len;
    let data = new simRosGetFloatingParameterRequest();
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
    return 'vrep_common/simRosGetFloatingParameterRequest';
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

class simRosGetFloatingParameterResponse {
  constructor() {
    this.result = 0;
    this.parameterValue = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetFloatingParameterResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [parameterValue]
    bufferInfo = _serializer.float32(obj.parameterValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetFloatingParameterResponse
    let tmp;
    let len;
    let data = new simRosGetFloatingParameterResponse();
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
    return 'vrep_common/simRosGetFloatingParameterResponse';
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
  Request: simRosGetFloatingParameterRequest,
  Response: simRosGetFloatingParameterResponse
};
