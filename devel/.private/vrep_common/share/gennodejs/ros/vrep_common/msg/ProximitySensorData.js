// Auto-generated. Do not edit!

// (in-package vrep_common.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ProximitySensorData {
  constructor() {
    this.detectedPoint = new geometry_msgs.msg.Point32();
    this.detectedObject = new std_msgs.msg.Int32();
    this.normalVector = new geometry_msgs.msg.Point32();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ProximitySensorData
    // Serialize message field [detectedPoint]
    bufferInfo = geometry_msgs.msg.Point32.serialize(obj.detectedPoint, bufferInfo);
    // Serialize message field [detectedObject]
    bufferInfo = std_msgs.msg.Int32.serialize(obj.detectedObject, bufferInfo);
    // Serialize message field [normalVector]
    bufferInfo = geometry_msgs.msg.Point32.serialize(obj.normalVector, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ProximitySensorData
    let tmp;
    let len;
    let data = new ProximitySensorData();
    // Deserialize message field [detectedPoint]
    tmp = geometry_msgs.msg.Point32.deserialize(buffer);
    data.detectedPoint = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [detectedObject]
    tmp = std_msgs.msg.Int32.deserialize(buffer);
    data.detectedObject = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [normalVector]
    tmp = geometry_msgs.msg.Point32.deserialize(buffer);
    data.normalVector = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'vrep_common/ProximitySensorData';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ca4cef31bef118238b22d9d3bc7e3089';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/Point32 detectedPoint
    std_msgs/Int32 detectedObject
    geometry_msgs/Point32 normalVector
    
    ================================================================================
    MSG: geometry_msgs/Point32
    # This contains the position of a point in free space(with 32 bits of precision).
    # It is recommeded to use Point wherever possible instead of Point32.  
    # 
    # This recommendation is to promote interoperability.  
    #
    # This message is designed to take up less space when sending
    # lots of points at once, as in the case of a PointCloud.  
    
    float32 x
    float32 y
    float32 z
    ================================================================================
    MSG: std_msgs/Int32
    int32 data
    `;
  }

};

module.exports = ProximitySensorData;
