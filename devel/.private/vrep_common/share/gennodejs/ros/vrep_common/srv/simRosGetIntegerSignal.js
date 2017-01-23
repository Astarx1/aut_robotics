// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosGetIntegerSignalRequest {
  constructor() {
    this.signalName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetIntegerSignalRequest
    // Serialize message field [signalName]
    bufferInfo = _serializer.string(obj.signalName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetIntegerSignalRequest
    let tmp;
    let len;
    let data = new simRosGetIntegerSignalRequest();
    // Deserialize message field [signalName]
    tmp = _deserializer.string(buffer);
    data.signalName = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetIntegerSignalRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '00c43203ad474c6ce746089e83166bba';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string signalName
    
    `;
  }

};

class simRosGetIntegerSignalResponse {
  constructor() {
    this.result = 0;
    this.signalValue = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetIntegerSignalResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [signalValue]
    bufferInfo = _serializer.int32(obj.signalValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetIntegerSignalResponse
    let tmp;
    let len;
    let data = new simRosGetIntegerSignalResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [signalValue]
    tmp = _deserializer.int32(buffer);
    data.signalValue = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetIntegerSignalResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7f91774edb9fca91ce9d303aaf91831b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    int32 signalValue
    
    
    `;
  }

};

module.exports = {
  Request: simRosGetIntegerSignalRequest,
  Response: simRosGetIntegerSignalResponse
};
