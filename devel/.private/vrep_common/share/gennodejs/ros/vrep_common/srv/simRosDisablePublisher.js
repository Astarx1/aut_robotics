// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosDisablePublisherRequest {
  constructor() {
    this.topicName = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosDisablePublisherRequest
    // Serialize message field [topicName]
    bufferInfo = _serializer.string(obj.topicName, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosDisablePublisherRequest
    let tmp;
    let len;
    let data = new simRosDisablePublisherRequest();
    // Deserialize message field [topicName]
    tmp = _deserializer.string(buffer);
    data.topicName = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosDisablePublisherRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '74b3306276d42621c8d9905fba018178';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string topicName
    
    `;
  }

};

class simRosDisablePublisherResponse {
  constructor() {
    this.referenceCounter = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosDisablePublisherResponse
    // Serialize message field [referenceCounter]
    bufferInfo = _serializer.int32(obj.referenceCounter, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosDisablePublisherResponse
    let tmp;
    let len;
    let data = new simRosDisablePublisherResponse();
    // Deserialize message field [referenceCounter]
    tmp = _deserializer.int32(buffer);
    data.referenceCounter = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosDisablePublisherResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b77f442068c4e56b29b4900433a0f3d6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 referenceCounter
    
    
    `;
  }

};

module.exports = {
  Request: simRosDisablePublisherRequest,
  Response: simRosDisablePublisherResponse
};
