// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosSetSphericalJointMatrixRequest {
  constructor() {
    this.handle = 0;
    this.quaternion = new geometry_msgs.msg.Quaternion();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetSphericalJointMatrixRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [quaternion]
    bufferInfo = geometry_msgs.msg.Quaternion.serialize(obj.quaternion, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetSphericalJointMatrixRequest
    let tmp;
    let len;
    let data = new simRosSetSphericalJointMatrixRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [quaternion]
    tmp = geometry_msgs.msg.Quaternion.deserialize(buffer);
    data.quaternion = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosSetSphericalJointMatrixRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b50ec6d9c510b5022a5f97f224455526';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    geometry_msgs/Quaternion quaternion
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

class simRosSetSphericalJointMatrixResponse {
  constructor() {
    this.result = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosSetSphericalJointMatrixResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosSetSphericalJointMatrixResponse
    let tmp;
    let len;
    let data = new simRosSetSphericalJointMatrixResponse();
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
    return 'vrep_common/simRosSetSphericalJointMatrixResponse';
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
  Request: simRosSetSphericalJointMatrixRequest,
  Response: simRosSetSphericalJointMatrixResponse
};
