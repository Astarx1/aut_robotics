// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetUIButtonLabelRequest {
  constructor() {
    this.uiHandle = 0;
    this.buttonID = 0;
    this.upStateLabel = '';
    this.downStateLabel = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetUIButtonLabelRequest
    // Serialize message field [uiHandle]
    bufferInfo = _serializer.int32(obj.uiHandle, bufferInfo);
    // Serialize message field [buttonID]
    bufferInfo = _serializer.int32(obj.buttonID, bufferInfo);
    // Serialize message field [upStateLabel]
    bufferInfo = _serializer.string(obj.upStateLabel, bufferInfo);
    // Serialize message field [downStateLabel]
    bufferInfo = _serializer.string(obj.downStateLabel, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetUIButtonLabelRequest
    let tmp;
    let len;
    let data = new simRosSetUIButtonLabelRequest();
    // Deserialize message field [uiHandle]
    tmp = _deserializer.int32(buffer);
    data.uiHandle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [buttonID]
    tmp = _deserializer.int32(buffer);
    data.buttonID = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [upStateLabel]
    tmp = _deserializer.string(buffer);
    data.upStateLabel = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [downStateLabel]
    tmp = _deserializer.string(buffer);
    data.downStateLabel = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetUIButtonLabelRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3e1ad0cb5a7e9bfb5b83bdbdf550ecc4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 uiHandle
    int32 buttonID
    string upStateLabel
    string downStateLabel
    
    `;
  }

};

class simRosSetUIButtonLabelResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetUIButtonLabelResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetUIButtonLabelResponse
    let tmp;
    let len;
    let data = new simRosSetUIButtonLabelResponse();
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
    return 'vrep_common/simRosSetUIButtonLabelResponse';
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
  Request: simRosSetUIButtonLabelRequest,
  Response: simRosSetUIButtonLabelResponse
};
