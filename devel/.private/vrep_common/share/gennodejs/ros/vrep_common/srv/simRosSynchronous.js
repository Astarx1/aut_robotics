// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSynchronousRequest {
  constructor() {
    this.enable = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSynchronousRequest
    // Serialize message field [enable]
    bufferInfo = _serializer.uint8(obj.enable, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSynchronousRequest
    let tmp;
    let len;
    let data = new simRosSynchronousRequest();
    // Deserialize message field [enable]
    tmp = _deserializer.uint8(buffer);
    data.enable = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSynchronousRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '34abd7794638063ef7576ad13e0da876';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    uint8 enable
    
    `;
  }

};

class simRosSynchronousResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSynchronousResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSynchronousResponse
    let tmp;
    let len;
    let data = new simRosSynchronousResponse();
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
    return 'vrep_common/simRosSynchronousResponse';
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
  Request: simRosSynchronousRequest,
  Response: simRosSynchronousResponse
};
