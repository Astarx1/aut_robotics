// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosDisableSubscriberRequest {
  constructor() {
    this.subscriberID = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosDisableSubscriberRequest
    // Serialize message field [subscriberID]
    bufferInfo = _serializer.int32(obj.subscriberID, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosDisableSubscriberRequest
    let tmp;
    let len;
    let data = new simRosDisableSubscriberRequest();
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
    return 'vrep_common/simRosDisableSubscriberRequest';
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

class simRosDisableSubscriberResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosDisableSubscriberResponse
    // Serialize message field [result]
    bufferInfo = _serializer.uint8(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosDisableSubscriberResponse
    let tmp;
    let len;
    let data = new simRosDisableSubscriberResponse();
    // Deserialize message field [result]
    tmp = _deserializer.uint8(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosDisableSubscriberResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '25458147911545c320c4c0a299eff763';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 result
    
    
    `;
  }

};

module.exports = {
  Request: simRosDisableSubscriberRequest,
  Response: simRosDisableSubscriberResponse
};
