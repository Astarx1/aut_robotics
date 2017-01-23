// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosLoadSceneRequest {
  constructor() {
    this.fileName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosLoadSceneRequest
    // Serialize message field [fileName]
    bufferInfo = _serializer.string(obj.fileName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosLoadSceneRequest
    let tmp;
    let len;
    let data = new simRosLoadSceneRequest();
    // Deserialize message field [fileName]
    tmp = _deserializer.string(buffer);
    data.fileName = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosLoadSceneRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0c96d4662a80949a4927729271153923';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string fileName
    
    `;
  }

};

class simRosLoadSceneResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosLoadSceneResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosLoadSceneResponse
    let tmp;
    let len;
    let data = new simRosLoadSceneResponse();
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
    return 'vrep_common/simRosLoadSceneResponse';
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
  Request: simRosLoadSceneRequest,
  Response: simRosLoadSceneResponse
};
