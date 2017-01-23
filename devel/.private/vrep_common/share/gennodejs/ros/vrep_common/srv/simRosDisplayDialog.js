// Auto-generated. Do not edit!

// (in-package vrep_common.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class simRosDisplayDialogRequest {
  constructor() {
    this.titleText = '';
    this.mainText = '';
    this.dialogType = 0;
    this.initialText = '';
    this.titleColors = [];
    this.dialogColors = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosDisplayDialogRequest
    // Serialize message field [titleText]
    bufferInfo = _serializer.string(obj.titleText, bufferInfo);
    // Serialize message field [mainText]
    bufferInfo = _serializer.string(obj.mainText, bufferInfo);
    // Serialize message field [dialogType]
    bufferInfo = _serializer.int32(obj.dialogType, bufferInfo);
    // Serialize message field [initialText]
    bufferInfo = _serializer.string(obj.initialText, bufferInfo);
    // Serialize the length for message field [titleColors]
    bufferInfo = _serializer.uint32(obj.titleColors.length, bufferInfo);
    // Serialize message field [titleColors]
    obj.titleColors.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [dialogColors]
    bufferInfo = _serializer.uint32(obj.dialogColors.length, bufferInfo);
    // Serialize message field [dialogColors]
    obj.dialogColors.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosDisplayDialogRequest
    let tmp;
    let len;
    let data = new simRosDisplayDialogRequest();
    // Deserialize message field [titleText]
    tmp = _deserializer.string(buffer);
    data.titleText = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mainText]
    tmp = _deserializer.string(buffer);
    data.mainText = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dialogType]
    tmp = _deserializer.int32(buffer);
    data.dialogType = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [initialText]
    tmp = _deserializer.string(buffer);
    data.initialText = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [titleColors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [titleColors]
    data.titleColors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.titleColors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [dialogColors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dialogColors]
    data.dialogColors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.dialogColors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosDisplayDialogRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3f2ff91d637ffb37230ccc9727e2857e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string titleText
    string mainText
    int32 dialogType
    string initialText
    float32[] titleColors
    float32[] dialogColors
    
    `;
  }

};

class simRosDisplayDialogResponse {
  constructor() {
    this.dialogHandle = 0;
    this.uiHandle = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type simRosDisplayDialogResponse
    // Serialize message field [dialogHandle]
    bufferInfo = _serializer.int32(obj.dialogHandle, bufferInfo);
    // Serialize message field [uiHandle]
    bufferInfo = _serializer.int32(obj.uiHandle, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type simRosDisplayDialogResponse
    let tmp;
    let len;
    let data = new simRosDisplayDialogResponse();
    // Deserialize message field [dialogHandle]
    tmp = _deserializer.int32(buffer);
    data.dialogHandle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [uiHandle]
    tmp = _deserializer.int32(buffer);
    data.uiHandle = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'vrep_common/simRosDisplayDialogResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ccb73bed17cccbeda47eabda11f7b01f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 dialogHandle
    int32 uiHandle
    
    
    `;
  }

};

module.exports = {
  Request: simRosDisplayDialogRequest,
  Response: simRosDisplayDialogResponse
};
