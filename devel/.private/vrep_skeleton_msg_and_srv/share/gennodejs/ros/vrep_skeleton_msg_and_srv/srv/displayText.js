// Auto-generated. Do not edit!

// (in-package vrep_skeleton_msg_and_srv.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class displayTextRequest {
  constructor() {
    this.textToDisplay = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type displayTextRequest
    // Serialize message field [textToDisplay]
    bufferInfo = _serializer.string(obj.textToDisplay, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type displayTextRequest
    let tmp;
    let len;
    let data = new displayTextRequest();
    // Deserialize message field [textToDisplay]
    tmp = _deserializer.string(buffer);
    data.textToDisplay = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_skeleton_msg_and_srv/displayTextRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7e35f54986033203e2229a885ac9f976';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string textToDisplay
    
    `;
  }

};

class displayTextResponse {
  constructor() {
    this.dialogHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type displayTextResponse
    // Serialize message field [dialogHandle]
    bufferInfo = _serializer.int32(obj.dialogHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type displayTextResponse
    let tmp;
    let len;
    let data = new displayTextResponse();
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
    return 'vrep_skeleton_msg_and_srv/displayTextResponse';
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

module.exports = {
  Request: displayTextRequest,
  Response: displayTextResponse
};
