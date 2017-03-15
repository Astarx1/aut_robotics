// Auto-generated. Do not edit!

// (in-package occgrid_planner_base.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let TrajectoryElement = require('./TrajectoryElement.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class Trajectory {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.Ts = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Trajectory
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [Ts]
    bufferInfo = _serializer.uint32(obj.Ts.length, bufferInfo);
    // Serialize message field [Ts]
    obj.Ts.forEach((val) => {
      bufferInfo = TrajectoryElement.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Trajectory
    let tmp;
    let len;
    let data = new Trajectory();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [Ts]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [Ts]
    data.Ts = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = TrajectoryElement.deserialize(buffer);
      data.Ts[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'occgrid_planner_base/Trajectory';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '18f77ffd2d905ff0c111ac0074191f03';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    occgrid_planner_base/TrajectoryElement[] Ts
    
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
    MSG: occgrid_planner_base/TrajectoryElement
    Header header
    geometry_msgs/Pose pose
    geometry_msgs/Twist twist
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    ================================================================================
    MSG: geometry_msgs/Twist
    # This expresses velocity in free space broken into its linear and angular parts.
    Vector3  linear
    Vector3  angular
    
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

module.exports = Trajectory;
