// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosReadDistanceRequest {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosReadDistanceRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosReadDistanceRequest
    let tmp;
    let len;
    let data = new simRosReadDistanceRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosReadDistanceRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '92535b678299d2bdda959704e78c275e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    
    `;
  }

};

class simRosReadDistanceResponse {
  constructor() {
    this.result = 0;
    this.distance = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosReadDistanceResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [distance]
    bufferInfo = _serializer.float32(obj.distance, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosReadDistanceResponse
    let tmp;
    let len;
    let data = new simRosReadDistanceResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [distance]
    tmp = _deserializer.float32(buffer);
    data.distance = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosReadDistanceResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5d04a72250553841153bb8b6a483569b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    float32 distance
    
    `;
  }

};

module.exports = {
  Request: simRosReadDistanceRequest,
  Response: simRosReadDistanceResponse
};
