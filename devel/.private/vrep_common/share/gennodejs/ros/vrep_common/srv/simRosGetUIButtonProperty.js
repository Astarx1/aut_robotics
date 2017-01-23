// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetUIButtonPropertyRequest {
  constructor() {
    this.uiHandle = 0;
    this.buttonID = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetUIButtonPropertyRequest
    // Serialize message field [uiHandle]
    bufferInfo = _serializer.int32(obj.uiHandle, bufferInfo);
    // Serialize message field [buttonID]
    bufferInfo = _serializer.int32(obj.buttonID, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetUIButtonPropertyRequest
    let tmp;
    let len;
    let data = new simRosGetUIButtonPropertyRequest();
    // Deserialize message field [uiHandle]
    tmp = _deserializer.int32(buffer);
    data.uiHandle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [buttonID]
    tmp = _deserializer.int32(buffer);
    data.buttonID = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetUIButtonPropertyRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3237fb7c1b11a9bf71b5bb80da60a11a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 uiHandle
    int32 buttonID
    
    `;
  }

};

class simRosGetUIButtonPropertyResponse {
  constructor() {
    this.propertyValue = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetUIButtonPropertyResponse
    // Serialize message field [propertyValue]
    bufferInfo = _serializer.int32(obj.propertyValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetUIButtonPropertyResponse
    let tmp;
    let len;
    let data = new simRosGetUIButtonPropertyResponse();
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
    return 'vrep_common/simRosGetUIButtonPropertyResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a3ff7a3737260dba8d61537cf18cc60a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 propertyValue
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetUIButtonPropertyRequest,
  Response: simRosGetUIButtonPropertyResponse
};
