// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetDialogInputRequest {
  constructor() {
    this.dialogHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetDialogInputRequest
    // Serialize message field [dialogHandle]
    bufferInfo = _serializer.int32(obj.dialogHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetDialogInputRequest
    let tmp;
    let len;
    let data = new simRosGetDialogInputRequest();
    // Deserialize message field [dialogHandle]
    tmp = _deserializer.int32(buffer);
    data.dialogHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetDialogInputRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '290f4bd47ce8d0f7c78c1d510052331a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 dialogHandle
    
    `;
  }

};

class simRosGetDialogInputResponse {
  constructor() {
    this.result = 0;
    this.input = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetDialogInputResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [input]
    bufferInfo = _serializer.string(obj.input, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetDialogInputResponse
    let tmp;
    let len;
    let data = new simRosGetDialogInputResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [input]
    tmp = _deserializer.string(buffer);
    data.input = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetDialogInputResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4dbece23a7f7a45b3aee510311b5c901';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    string input
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetDialogInputRequest,
  Response: simRosGetDialogInputResponse
};
