// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetIntegerParameterRequest {
  constructor() {
    this.parameter = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetIntegerParameterRequest
    // Serialize message field [parameter]
    bufferInfo = _serializer.int32(obj.parameter, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetIntegerParameterRequest
    let tmp;
    let len;
    let data = new simRosGetIntegerParameterRequest();
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
    return 'vrep_common/simRosGetIntegerParameterRequest';
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

class simRosGetIntegerParameterResponse {
  constructor() {
    this.result = 0;
    this.parameterValue = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetIntegerParameterResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [parameterValue]
    bufferInfo = _serializer.int32(obj.parameterValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetIntegerParameterResponse
    let tmp;
    let len;
    let data = new simRosGetIntegerParameterResponse();
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
    return 'vrep_common/simRosGetIntegerParameterResponse';
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
  Request: simRosGetIntegerParameterRequest,
  Response: simRosGetIntegerParameterResponse
};
