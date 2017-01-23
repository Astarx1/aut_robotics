// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetUISliderRequest {
  constructor() {
    this.uiHandle = 0;
    this.buttonID = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetUISliderRequest
    // Serialize message field [uiHandle]
    bufferInfo = _serializer.int32(obj.uiHandle, bufferInfo);
    // Serialize message field [buttonID]
    bufferInfo = _serializer.int32(obj.buttonID, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetUISliderRequest
    let tmp;
    let len;
    let data = new simRosGetUISliderRequest();
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
    return 'vrep_common/simRosGetUISliderRequest';
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

class simRosGetUISliderResponse {
  constructor() {
    this.position = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetUISliderResponse
    // Serialize message field [position]
    bufferInfo = _serializer.int32(obj.position, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetUISliderResponse
    let tmp;
    let len;
    let data = new simRosGetUISliderResponse();
    // Deserialize message field [position]
    tmp = _deserializer.int32(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetUISliderResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ada70156e12e6e31948c64c60d8bb212';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 position
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetUISliderRequest,
  Response: simRosGetUISliderResponse
};
