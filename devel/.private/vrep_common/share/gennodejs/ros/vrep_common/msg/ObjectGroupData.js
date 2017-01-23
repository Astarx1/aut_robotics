// Auto-generated. Do not edit!

// (in-package vrep_common.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ObjectGroupData {
  constructor() {
    this.handles = new std_msgs.msg.Int32MultiArray();
    this.intData = new std_msgs.msg.Int32MultiArray();
    this.floatData = new std_msgs.msg.Float32MultiArray();
    this.stringData = new std_msgs.msg.String();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ObjectGroupData
    // Serialize message field [handles]
    bufferInfo = std_msgs.msg.Int32MultiArray.serialize(obj.handles, bufferInfo);
    // Serialize message field [intData]
    bufferInfo = std_msgs.msg.Int32MultiArray.serialize(obj.intData, bufferInfo);
    // Serialize message field [floatData]
    bufferInfo = std_msgs.msg.Float32MultiArray.serialize(obj.floatData, bufferInfo);
    // Serialize message field [stringData]
    bufferInfo = std_msgs.msg.String.serialize(obj.stringData, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ObjectGroupData
    let tmp;
    let len;
    let data = new ObjectGroupData();
    // Deserialize message field [handles]
    tmp = std_msgs.msg.Int32MultiArray.deserialize(buffer);
    data.handles = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [intData]
    tmp = std_msgs.msg.Int32MultiArray.deserialize(buffer);
    data.intData = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [floatData]
    tmp = std_msgs.msg.Float32MultiArray.deserialize(buffer);
    data.floatData = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stringData]
    tmp = std_msgs.msg.String.deserialize(buffer);
    data.stringData = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'vrep_common/ObjectGroupData';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd73f2682eafdfd3c477ba05ceeae1ada';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/Int32MultiArray handles
    std_msgs/Int32MultiArray intData
    std_msgs/Float32MultiArray floatData
    std_msgs/String stringData
    
    ================================================================================
    MSG: std_msgs/Int32MultiArray
    # Please look at the MultiArrayLayout message definition for
    # documentation on all multiarrays.
    
    MultiArrayLayout  layout        # specification of data layout
    int32[]           data          # array of data
    
    
    ================================================================================
    MSG: std_msgs/MultiArrayLayout
    # The multiarray declares a generic multi-dimensional array of a
    # particular data type.  Dimensions are ordered from outer most
    # to inner most.
    
    MultiArrayDimension[] dim # Array of dimension properties
    uint32 data_offset        # padding elements at front of data
    
    # Accessors should ALWAYS be written in terms of dimension stride
    # and specified outer-most dimension first.
    # 
    # multiarray(i,j,k) = data[data_offset + dim_stride[1]*i + dim_stride[2]*j + k]
    #
    # A standard, 3-channel 640x480 image with interleaved color channels
    # would be specified as:
    #
    # dim[0].label  = "height"
    # dim[0].size   = 480
    # dim[0].stride = 3*640*480 = 921600  (note dim[0] stride is just size of image)
    # dim[1].label  = "width"
    # dim[1].size   = 640
    # dim[1].stride = 3*640 = 1920
    # dim[2].label  = "channel"
    # dim[2].size   = 3
    # dim[2].stride = 3
    #
    # multiarray(i,j,k) refers to the ith row, jth column, and kth channel.
    
    ================================================================================
    MSG: std_msgs/MultiArrayDimension
    string label   # label of given dimension
    uint32 size    # size of given dimension (in type units)
    uint32 stride  # stride of given dimension
    ================================================================================
    MSG: std_msgs/Float32MultiArray
    # Please look at the MultiArrayLayout message definition for
    # documentation on all multiarrays.
    
    MultiArrayLayout  layout        # specification of data layout
    float32[]         data          # array of data
    
    
    ================================================================================
    MSG: std_msgs/String
    string data
    
    `;
  }

};

module.exports = ObjectGroupData;
