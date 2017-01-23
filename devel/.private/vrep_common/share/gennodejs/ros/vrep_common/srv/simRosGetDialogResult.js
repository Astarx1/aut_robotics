// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetDialogResultRequest {
  constructor() {
    this.dialogHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetDialogResultRequest
    // Serialize message field [dialogHandle]
    bufferInfo = _serializer.int32(obj.dialogHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetDialogResultRequest
    let tmp;
    let len;
    let data = new simRosGetDialogResultRequest();
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
    return 'vrep_common/simRosGetDialogResultRequest';
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

class simRosGetDialogResultResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetDialogResultResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetDialogResultResponse
    let tmp;
    let len;
    let data = new simRosGetDialogResultResponse();
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
    return 'vrep_common/simRosGetDialogResultResponse';
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
  Request: simRosGetDialogResultRequest,
  Response: simRosGetDialogResultResponse
};
