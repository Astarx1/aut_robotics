// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetUIEventButtonRequest {
  constructor() {
    this.uiHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetUIEventButtonRequest
    // Serialize message field [uiHandle]
    bufferInfo = _serializer.int32(obj.uiHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetUIEventButtonRequest
    let tmp;
    let len;
    let data = new simRosGetUIEventButtonRequest();
    // Deserialize message field [uiHandle]
    tmp = _deserializer.int32(buffer);
    data.uiHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetUIEventButtonRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '66b6744fce66e25d77c762900fd5eb01';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 uiHandle
    
    `;
  }

};

class simRosGetUIEventButtonResponse {
  constructor() {
    this.buttonID = 0;
    this.auxiliaryValues = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetUIEventButtonResponse
    // Serialize message field [buttonID]
    bufferInfo = _serializer.int32(obj.buttonID, bufferInfo);
    // Serialize the length for message field [auxiliaryValues]
    bufferInfo = _serializer.uint32(obj.auxiliaryValues.length, bufferInfo);
    // Serialize message field [auxiliaryValues]
    obj.auxiliaryValues.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetUIEventButtonResponse
    let tmp;
    let len;
    let data = new simRosGetUIEventButtonResponse();
    // Deserialize message field [buttonID]
    tmp = _deserializer.int32(buffer);
    data.buttonID = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [auxiliaryValues]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [auxiliaryValues]
    data.auxiliaryValues = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.auxiliaryValues[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetUIEventButtonResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b728477dc7ef5ede0fdff50ce2320d21';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 buttonID
    int32[] auxiliaryValues
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetUIEventButtonRequest,
  Response: simRosGetUIEventButtonResponse
};
