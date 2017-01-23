// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class simRosReadForceSensorRequest {
  constructor() {
    this.handle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosReadForceSensorRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosReadForceSensorRequest
    let tmp;
    let len;
    let data = new simRosReadForceSensorRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosReadForceSensorRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '92535b678299d2bdda959704e78c275e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    
    `;
  }

};

class simRosReadForceSensorResponse {
  constructor() {
    this.result = 0;
    this.force = new geometry_msgs.msg.Vector3();
    this.torque = new geometry_msgs.msg.Vector3();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosReadForceSensorResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [force]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.force, bufferInfo);
    // Serialize message field [torque]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.torque, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosReadForceSensorResponse
    let tmp;
    let len;
    let data = new simRosReadForceSensorResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [force]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.force = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [torque]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.torque = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosReadForceSensorResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5e4b65925af0e441033ad70b707ce684';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    geometry_msgs/Vector3 force
    geometry_msgs/Vector3 torque
    
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

};

module.exports = {
  Request: simRosReadForceSensorRequest,
  Response: simRosReadForceSensorResponse
};
