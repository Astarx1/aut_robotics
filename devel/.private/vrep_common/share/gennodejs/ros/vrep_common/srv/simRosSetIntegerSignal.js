// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetIntegerSignalRequest {
  constructor() {
    this.signalName = '';
    this.signalValue = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetIntegerSignalRequest
    // Serialize message field [signalName]
    bufferInfo = _serializer.string(obj.signalName, bufferInfo);
    // Serialize message field [signalValue]
    bufferInfo = _serializer.int32(obj.signalValue, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetIntegerSignalRequest
    let tmp;
    let len;
    let data = new simRosSetIntegerSignalRequest();
    // Deserialize message field [signalName]
    tmp = _deserializer.string(buffer);
    data.signalName = tmp.data;
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
    return 'vrep_common/simRosSetIntegerSignalRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '70abbfe43fc78e6558d58b762827146c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string signalName
    int32 signalValue
    
    `;
  }

};

class simRosSetIntegerSignalResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetIntegerSignalResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetIntegerSignalResponse
    let tmp;
    let len;
    let data = new simRosSetIntegerSignalResponse();
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
    return 'vrep_common/simRosSetIntegerSignalResponse';
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
  Request: simRosSetIntegerSignalRequest,
  Response: simRosSetIntegerSignalResponse
};
