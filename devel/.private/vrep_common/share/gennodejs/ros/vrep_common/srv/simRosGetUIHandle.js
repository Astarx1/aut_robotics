// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetUIHandleRequest {
  constructor() {
    this.uiName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetUIHandleRequest
    // Serialize message field [uiName]
    bufferInfo = _serializer.string(obj.uiName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetUIHandleRequest
    let tmp;
    let len;
    let data = new simRosGetUIHandleRequest();
    // Deserialize message field [uiName]
    tmp = _deserializer.string(buffer);
    data.uiName = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetUIHandleRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7f8e94c02f5baf20211b30f44081098c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string uiName
    
    `;
  }

};

class simRosGetUIHandleResponse {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetUIHandleResponse
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetUIHandleResponse
    let tmp;
    let len;
    let data = new simRosGetUIHandleResponse();
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
    return 'vrep_common/simRosGetUIHandleResponse';
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

module.exports = {
  Request: simRosGetUIHandleRequest,
  Response: simRosGetUIHandleResponse
};
