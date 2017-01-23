// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class simRosGetInfoRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetInfoRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetInfoRequest
    let tmp;
    let len;
    let data = new simRosGetInfoRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetInfoRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    
    `;
  }

};

class simRosGetInfoResponse {
  constructor() {
    this.headerInfo = new std_msgs.msg.Header();
    this.simulatorState = 0;
    this.simulationTime = 0.0;
    this.timeStep = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetInfoResponse
    // Serialize message field [headerInfo]
    bufferInfo = std_msgs.msg.Header.serialize(obj.headerInfo, bufferInfo);
    // Serialize message field [simulatorState]
    bufferInfo = _serializer.int32(obj.simulatorState, bufferInfo);
    // Serialize message field [simulationTime]
    bufferInfo = _serializer.float32(obj.simulationTime, bufferInfo);
    // Serialize message field [timeStep]
    bufferInfo = _serializer.float32(obj.timeStep, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetInfoResponse
    let tmp;
    let len;
    let data = new simRosGetInfoResponse();
    // Deserialize message field [headerInfo]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.headerInfo = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [simulatorState]
    tmp = _deserializer.int32(buffer);
    data.simulatorState = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [simulationTime]
    tmp = _deserializer.float32(buffer);
    data.simulationTime = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [timeStep]
    tmp = _deserializer.float32(buffer);
    data.timeStep = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetInfoResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2ab24cc264f8f17af7e013147c57dbc0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header headerInfo
    int32 simulatorState
    float32 simulationTime
    float32 timeStep
    
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    `;
  }

};

module.exports = {
  Request: simRosGetInfoRequest,
  Response: simRosGetInfoResponse
};
