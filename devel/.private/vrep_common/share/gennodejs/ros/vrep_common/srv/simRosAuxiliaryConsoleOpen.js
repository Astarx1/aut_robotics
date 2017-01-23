// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosAuxiliaryConsoleOpenRequest {
  constructor() {
    this.title = '';
    this.maxLines = 0;
    this.mode = 0;
    this.position = [];
    this.size = [];
    this.textColor = [];
    this.backgroundColor = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosAuxiliaryConsoleOpenRequest
    // Serialize message field [title]
    bufferInfo = _serializer.string(obj.title, bufferInfo);
    // Serialize message field [maxLines]
    bufferInfo = _serializer.int32(obj.maxLines, bufferInfo);
    // Serialize message field [mode]
    bufferInfo = _serializer.int32(obj.mode, bufferInfo);
    // Serialize the length for message field [position]
    bufferInfo = _serializer.uint32(obj.position.length, bufferInfo);
    // Serialize message field [position]
    obj.position.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [size]
    bufferInfo = _serializer.uint32(obj.size.length, bufferInfo);
    // Serialize message field [size]
    obj.size.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    // Serialize the length for message field [textColor]
    bufferInfo = _serializer.uint32(obj.textColor.length, bufferInfo);
    // Serialize message field [textColor]
    obj.textColor.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [backgroundColor]
    bufferInfo = _serializer.uint32(obj.backgroundColor.length, bufferInfo);
    // Serialize message field [backgroundColor]
    obj.backgroundColor.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosAuxiliaryConsoleOpenRequest
    let tmp;
    let len;
    let data = new simRosAuxiliaryConsoleOpenRequest();
    // Deserialize message field [title]
    tmp = _deserializer.string(buffer);
    data.title = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [maxLines]
    tmp = _deserializer.int32(buffer);
    data.maxLines = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mode]
    tmp = _deserializer.int32(buffer);
    data.mode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [position]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    data.position = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.position[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [size]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [size]
    data.size = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.size[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [textColor]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [textColor]
    data.textColor = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.textColor[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [backgroundColor]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [backgroundColor]
    data.backgroundColor = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.backgroundColor[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosAuxiliaryConsoleOpenRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b11b7ee0194549fd289229f6b0fe6c7a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string title
    int32 maxLines
    int32 mode
    int32[] position
    int32[] size
    float32[] textColor
    float32[] backgroundColor
    
    `;
  }

};

class simRosAuxiliaryConsoleOpenResponse {
  constructor() {
    this.consoleHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosAuxiliaryConsoleOpenResponse
    // Serialize message field [consoleHandle]
    bufferInfo = _serializer.int32(obj.consoleHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosAuxiliaryConsoleOpenResponse
    let tmp;
    let len;
    let data = new simRosAuxiliaryConsoleOpenResponse();
    // Deserialize message field [consoleHandle]
    tmp = _deserializer.int32(buffer);
    data.consoleHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosAuxiliaryConsoleOpenResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0712f8f971970cd49793e7755140f018';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 consoleHandle
    
    
    
    `;
  }

};

module.exports = {
  Request: simRosAuxiliaryConsoleOpenRequest,
  Response: simRosAuxiliaryConsoleOpenResponse
};
