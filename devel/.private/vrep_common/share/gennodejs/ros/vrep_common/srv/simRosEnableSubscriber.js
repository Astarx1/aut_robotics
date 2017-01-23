// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosEnableSubscriberRequest {
  constructor() {
    this.topicName = '';
    this.queueSize = 0;
    this.streamCmd = 0;
    this.auxInt1 = 0;
    this.auxInt2 = 0;
    this.auxString = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosEnableSubscriberRequest
    // Serialize message field [topicName]
    bufferInfo = _serializer.string(obj.topicName, bufferInfo);
    // Serialize message field [queueSize]
    bufferInfo = _serializer.int32(obj.queueSize, bufferInfo);
    // Serialize message field [streamCmd]
    bufferInfo = _serializer.int32(obj.streamCmd, bufferInfo);
    // Serialize message field [auxInt1]
    bufferInfo = _serializer.int32(obj.auxInt1, bufferInfo);
    // Serialize message field [auxInt2]
    bufferInfo = _serializer.int32(obj.auxInt2, bufferInfo);
    // Serialize message field [auxString]
    bufferInfo = _serializer.string(obj.auxString, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosEnableSubscriberRequest
    let tmp;
    let len;
    let data = new simRosEnableSubscriberRequest();
    // Deserialize message field [topicName]
    tmp = _deserializer.string(buffer);
    data.topicName = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [queueSize]
    tmp = _deserializer.int32(buffer);
    data.queueSize = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [streamCmd]
    tmp = _deserializer.int32(buffer);
    data.streamCmd = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [auxInt1]
    tmp = _deserializer.int32(buffer);
    data.auxInt1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [auxInt2]
    tmp = _deserializer.int32(buffer);
    data.auxInt2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [auxString]
    tmp = _deserializer.string(buffer);
    data.auxString = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosEnableSubscriberRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e7df7c248dc5801f9f5b98f61f3741b8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string topicName
    int32 queueSize
    int32 streamCmd
    int32 auxInt1
    int32 auxInt2
    string auxString
    
    `;
  }

};

class simRosEnableSubscriberResponse {
  constructor() {
    this.subscriberID = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosEnableSubscriberResponse
    // Serialize message field [subscriberID]
    bufferInfo = _serializer.int32(obj.subscriberID, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosEnableSubscriberResponse
    let tmp;
    let len;
    let data = new simRosEnableSubscriberResponse();
    // Deserialize message field [subscriberID]
    tmp = _deserializer.int32(buffer);
    data.subscriberID = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosEnableSubscriberResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '62d69ecf284a2ca70f446f9db0533ca8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 subscriberID
    
    
    `;
  }

};

module.exports = {
  Request: simRosEnableSubscriberRequest,
  Response: simRosEnableSubscriberResponse
};
