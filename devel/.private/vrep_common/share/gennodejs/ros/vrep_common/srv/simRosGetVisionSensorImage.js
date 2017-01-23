// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let sensor_msgs = _finder('sensor_msgs');

//-----------------------------------------------------------

class simRosGetVisionSensorImageRequest {
  constructor() {
    this.handle = 0;
    this.options = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetVisionSensorImageRequest
    // Serialize message field [handle]
    bufferInfo = _serializer.int32(obj.handle, bufferInfo);
    // Serialize message field [options]
    bufferInfo = _serializer.uint8(obj.options, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetVisionSensorImageRequest
    let tmp;
    let len;
    let data = new simRosGetVisionSensorImageRequest();
    // Deserialize message field [handle]
    tmp = _deserializer.int32(buffer);
    data.handle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [options]
    tmp = _deserializer.uint8(buffer);
    data.options = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetVisionSensorImageRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '849631fc9158c7822872c77f87a72668';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    int32 handle
    uint8 options
    
    `;
  }

};

class simRosGetVisionSensorImageResponse {
  constructor() {
    this.result = 0;
    this.image = new sensor_msgs.msg.Image();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosGetVisionSensorImageResponse
    // Serialize message field [result]
    bufferInfo = _serializer.int32(obj.result, bufferInfo);
    // Serialize message field [image]
    bufferInfo = sensor_msgs.msg.Image.serialize(obj.image, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosGetVisionSensorImageResponse
    let tmp;
    let len;
    let data = new simRosGetVisionSensorImageResponse();
    // Deserialize message field [result]
    tmp = _deserializer.int32(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [image]
    tmp = sensor_msgs.msg.Image.deserialize(buffer);
    data.image = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosGetVisionSensorImageResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '52755fc56cbfa4eb9fe755efd8eb5ca6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 result
    sensor_msgs/Image image
    
    
    ================================================================================
    MSG: sensor_msgs/Image
    # This message contains an uncompressed image
    # (0, 0) is at top-left corner of image
    #
    
    Header header        # Header timestamp should be acquisition time of image
                         # Header frame_id should be optical frame of camera
                         # origin of frame should be optical center of cameara
                         # +x should point to the right in the image
                         # +y should point down in the image
                         # +z should point into to plane of the image
                         # If the frame_id here and the frame_id of the CameraInfo
                         # message associated with the image conflict
                         # the behavior is undefined
    
    uint32 height         # image height, that is, number of rows
    uint32 width          # image width, that is, number of columns
    
    # The legal values for encoding are in file src/image_encodings.cpp
    # If you want to standardize a new string format, join
    # ros-users@lists.sourceforge.net and send an email proposing a new encoding.
    
    string encoding       # Encoding of pixels -- channel meaning, ordering, size
                          # taken from the list of strings in include/sensor_msgs/image_encodings.h
    
    uint8 is_bigendian    # is this data bigendian?
    uint32 step           # Full row length in bytes
    uint8[] data          # actual matrix data, size is (step * rows)
    
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
  Request: simRosGetVisionSensorImageRequest,
  Response: simRosGetVisionSensorImageResponse
};
