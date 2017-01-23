// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetJointForceRequest {
  constructor() {
    this.handle = 0;
    this.forceOrTorque = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetJointForceRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [forceOrTorque]
    bufferInfo = _serializer.float64(obj.forceOrTorque, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetJointForceRequest
    let tmp;
    let len;
    let data = new simRosSetJointForceRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [forceOrTorque]
    tmp = _deserializer.float64(buffer);
    data.forceOrTorque = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetJointForceRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0b9990f23344c1e0572cb371bcfde7cf';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    float64 forceOrTorque
    
    `;
  }

};

class simRosSetJointForceResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetJointForceResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetJointForceResponse
    let tmp;
    let len;
    let data = new simRosSetJointForceResponse();
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
    return 'vrep_common/simRosSetJointForceResponse';
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
  Request: simRosSetJointForceRequest,
  Response: simRosSetJointForceResponse
};
