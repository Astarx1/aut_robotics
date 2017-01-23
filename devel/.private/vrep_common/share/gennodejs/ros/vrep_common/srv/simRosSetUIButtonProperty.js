// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetUIButtonPropertyRequest {
  constructor() {
    this.uiHandle = 0;
    this.buttonID = 0;
    this.propertyValue = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetUIButtonPropertyRequest
    // Serialize message field [uiHandle]
    bufferInfo = _serializer.int32(obj.uiHandle, bufferInfo);
    // Serialize message field [buttonID]
    bufferInfo = _serializer.int32(obj.buttonID, bufferInfo);
    // Serialize message field [propertyValue]
    bufferInfo = _serializer.int32(obj.propertyValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetUIButtonPropertyRequest
    let tmp;
    let len;
    let data = new simRosSetUIButtonPropertyRequest();
    // Deserialize message field [uiHandle]
    tmp = _deserializer.int32(buffer);
    data.uiHandle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [buttonID]
    tmp = _deserializer.int32(buffer);
    data.buttonID = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [propertyValue]
    tmp = _deserializer.int32(buffer);
    data.propertyValue = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetUIButtonPropertyRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'bd54461d9cf9c63ea0374c072626f329';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 uiHandle
    int32 buttonID
    int32 propertyValue
    
    `;
  }

};

class simRosSetUIButtonPropertyResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetUIButtonPropertyResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetUIButtonPropertyResponse
    let tmp;
    let len;
    let data = new simRosSetUIButtonPropertyResponse();
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
    return 'vrep_common/simRosSetUIButtonPropertyResponse';
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
  Request: simRosSetUIButtonPropertyRequest,
  Response: simRosSetUIButtonPropertyResponse
};
