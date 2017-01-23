// Auto-generated. Do not edit!

// (in-package vrep_common.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class ForceSensorData {
  constructor() {
    this.sensorState = new std_msgs.msg.Int32();
    this.force = new geometry_msgs.msg.Vector3();
    this.torque = new geometry_msgs.msg.Vector3();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ForceSensorData
    // Serialize message field [sensorState]
    bufferInfo = std_msgs.msg.Int32.serialize(obj.sensorState, bufferInfo);
    // Serialize message field [force]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.force, bufferInfo);
    // Serialize message field [torque]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.torque, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ForceSensorData
    let tmp;
    let len;
    let data = new ForceSensorData();
    // Deserialize message field [sensorState]
    tmp = std_msgs.msg.Int32.deserialize(buffer);
    data.sensorState = tmp.data;
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
    // Returns string type for a message object
    return 'vrep_common/ForceSensorData';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '975cc3fe659f11cb0dbd06416cff4a10';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/Int32 sensorState
    geometry_msgs/Vector3 force
    geometry_msgs/Vector3 torque
    
    ================================================================================
    MSG: std_msgs/Int32
    int32 data
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

module.exports = ForceSensorData;
