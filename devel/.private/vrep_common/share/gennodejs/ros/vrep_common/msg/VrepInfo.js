// Auto-generated. Do not edit!

// (in-package vrep_common.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class VrepInfo {
  constructor() {
    this.headerInfo = new std_msgs.msg.Header();
    this.simulatorState = new std_msgs.msg.Int32();
    this.simulationTime = new std_msgs.msg.Float32();
    this.timeStep = new std_msgs.msg.Float32();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type VrepInfo
    // Serialize message field [headerInfo]
    bufferInfo = std_msgs.msg.Header.serialize(obj.headerInfo, bufferInfo);
    // Serialize message field [simulatorState]
    bufferInfo = std_msgs.msg.Int32.serialize(obj.simulatorState, bufferInfo);
    // Serialize message field [simulationTime]
    bufferInfo = std_msgs.msg.Float32.serialize(obj.simulationTime, bufferInfo);
    // Serialize message field [timeStep]
    bufferInfo = std_msgs.msg.Float32.serialize(obj.timeStep, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type VrepInfo
    let tmp;
    let len;
    let data = new VrepInfo();
    // Deserialize message field [headerInfo]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.headerInfo = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [simulatorState]
    tmp = std_msgs.msg.Int32.deserialize(buffer);
    data.simulatorState = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [simulationTime]
    tmp = std_msgs.msg.Float32.deserialize(buffer);
    data.simulationTime = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [timeStep]
    tmp = std_msgs.msg.Float32.deserialize(buffer);
    data.timeStep = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'vrep_common/VrepInfo';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '66334ab2212d3c89226a89b7a37b2f95';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/Header headerInfo
    std_msgs/Int32 simulatorState
    std_msgs/Float32 simulationTime
    std_msgs/Float32 timeStep
    
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
    
    ================================================================================
    MSG: std_msgs/Int32
    int32 data
    ================================================================================
    MSG: std_msgs/Float32
    float32 data
    `;
  }

};

module.exports = VrepInfo;
