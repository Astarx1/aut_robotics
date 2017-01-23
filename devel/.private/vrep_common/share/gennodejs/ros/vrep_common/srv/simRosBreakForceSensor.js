// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosBreakForceSensorRequest {
  constructor() {
    this.objectHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosBreakForceSensorRequest
    // Serialize message field [objectHandle]
    bufferInfo = _serializer.int32(obj.objectHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosBreakForceSensorRequest
    let tmp;
    let len;
    let data = new simRosBreakForceSensorRequest();
    // Deserialize message field [objectHandle]
    tmp = _deserializer.int32(buffer);
    data.objectHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosBreakForceSensorRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c941d9606c863e83c4461ed050c749de';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 objectHandle
    
    `;
  }

};

class simRosBreakForceSensorResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosBreakForceSensorResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosBreakForceSensorResponse
    let tmp;
    let len;
    let data = new simRosBreakForceSensorResponse();
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
    return 'vrep_common/simRosBreakForceSensorResponse';
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
  Request: simRosBreakForceSensorRequest,
  Response: simRosBreakForceSensorResponse
};
