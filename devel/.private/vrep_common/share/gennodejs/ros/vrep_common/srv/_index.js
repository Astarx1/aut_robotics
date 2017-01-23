
"use strict";

let simRosGetUISlider = require('./simRosGetUISlider.js')
let simRosCreateDummy = require('./simRosCreateDummy.js')
let simRosGetCollectionHandle = require('./simRosGetCollectionHandle.js')
let simRosGetObjectIntParameter = require('./simRosGetObjectIntParameter.js')
let simRosDisableSubscriber = require('./simRosDisableSubscriber.js')
let simRosGetDistanceHandle = require('./simRosGetDistanceHandle.js')
let simRosClearIntegerSignal = require('./simRosClearIntegerSignal.js')
let simRosPauseSimulation = require('./simRosPauseSimulation.js')
let simRosEndDialog = require('./simRosEndDialog.js')
let simRosAuxiliaryConsoleShow = require('./simRosAuxiliaryConsoleShow.js')
let simRosSetIntegerSignal = require('./simRosSetIntegerSignal.js')
let simRosSetFloatSignal = require('./simRosSetFloatSignal.js')
let simRosSetFloatingParameter = require('./simRosSetFloatingParameter.js')
let simRosGetUIButtonProperty = require('./simRosGetUIButtonProperty.js')
let simRosGetDialogInput = require('./simRosGetDialogInput.js')
let simRosGetVisionSensorImage = require('./simRosGetVisionSensorImage.js')
let simRosGetAndClearStringSignal = require('./simRosGetAndClearStringSignal.js')
let simRosGetObjectPose = require('./simRosGetObjectPose.js')
let simRosTransferFile = require('./simRosTransferFile.js')
let simRosAuxiliaryConsolePrint = require('./simRosAuxiliaryConsolePrint.js')
let simRosAppendStringSignal = require('./simRosAppendStringSignal.js')
let simRosLoadUI = require('./simRosLoadUI.js')
let simRosCloseScene = require('./simRosCloseScene.js')
let simRosGetIntegerParameter = require('./simRosGetIntegerParameter.js')
let simRosBreakForceSensor = require('./simRosBreakForceSensor.js')
let simRosEnablePublisher = require('./simRosEnablePublisher.js')
let simRosGetArrayParameter = require('./simRosGetArrayParameter.js')
let simRosGetJointMatrix = require('./simRosGetJointMatrix.js')
let simRosAuxiliaryConsoleOpen = require('./simRosAuxiliaryConsoleOpen.js')
let simRosGetObjects = require('./simRosGetObjects.js')
let simRosReadForceSensor = require('./simRosReadForceSensor.js')
let simRosSetBooleanParameter = require('./simRosSetBooleanParameter.js')
let simRosGetUIEventButton = require('./simRosGetUIEventButton.js')
let simRosSetUIButtonProperty = require('./simRosSetUIButtonProperty.js')
let simRosSetUIButtonLabel = require('./simRosSetUIButtonLabel.js')
let simRosCopyPasteObjects = require('./simRosCopyPasteObjects.js')
let simRosClearFloatSignal = require('./simRosClearFloatSignal.js')
let simRosGetLastErrors = require('./simRosGetLastErrors.js')
let simRosRemoveUI = require('./simRosRemoveUI.js')
let simRosSetJointPosition = require('./simRosSetJointPosition.js')
let simRosGetModelProperty = require('./simRosGetModelProperty.js')
let simRosReadVisionSensor = require('./simRosReadVisionSensor.js')
let simRosReadDistance = require('./simRosReadDistance.js')
let simRosGetVisionSensorDepthBuffer = require('./simRosGetVisionSensorDepthBuffer.js')
let simRosLoadModel = require('./simRosLoadModel.js')
let simRosSetJointTargetVelocity = require('./simRosSetJointTargetVelocity.js')
let simRosSetObjectPosition = require('./simRosSetObjectPosition.js')
let simRosSynchronous = require('./simRosSynchronous.js')
let simRosGetInfo = require('./simRosGetInfo.js')
let simRosSetObjectQuaternion = require('./simRosSetObjectQuaternion.js')
let simRosDisablePublisher = require('./simRosDisablePublisher.js')
let simRosEraseFile = require('./simRosEraseFile.js')
let simRosRemoveModel = require('./simRosRemoveModel.js')
let simRosGetStringParameter = require('./simRosGetStringParameter.js')
let simRosReadProximitySensor = require('./simRosReadProximitySensor.js')
let simRosSetObjectParent = require('./simRosSetObjectParent.js')
let simRosSetObjectPose = require('./simRosSetObjectPose.js')
let simRosSetObjectFloatParameter = require('./simRosSetObjectFloatParameter.js')
let simRosGetObjectFloatParameter = require('./simRosGetObjectFloatParameter.js')
let simRosSetSphericalJointMatrix = require('./simRosSetSphericalJointMatrix.js')
let simRosDisplayDialog = require('./simRosDisplayDialog.js')
let simRosAuxiliaryConsoleClose = require('./simRosAuxiliaryConsoleClose.js')
let simRosSetJointForce = require('./simRosSetJointForce.js')
let simRosEnableSubscriber = require('./simRosEnableSubscriber.js')
let simRosGetObjectHandle = require('./simRosGetObjectHandle.js')
let simRosStartSimulation = require('./simRosStartSimulation.js')
let simRosSetJointState = require('./simRosSetJointState.js')
let simRosGetDialogResult = require('./simRosGetDialogResult.js')
let simRosRemoveObject = require('./simRosRemoveObject.js')
let simRosGetBooleanParameter = require('./simRosGetBooleanParameter.js')
let simRosSetUISlider = require('./simRosSetUISlider.js')
let simRosSetModelProperty = require('./simRosSetModelProperty.js')
let simRosSetObjectIntParameter = require('./simRosSetObjectIntParameter.js')
let simRosGetObjectSelection = require('./simRosGetObjectSelection.js')
let simRosSetStringSignal = require('./simRosSetStringSignal.js')
let simRosLoadScene = require('./simRosLoadScene.js')
let simRosGetStringSignal = require('./simRosGetStringSignal.js')
let simRosGetJointState = require('./simRosGetJointState.js')
let simRosGetUIHandle = require('./simRosGetUIHandle.js')
let simRosSetJointTargetPosition = require('./simRosSetJointTargetPosition.js')
let simRosSynchronousTrigger = require('./simRosSynchronousTrigger.js')
let simRosSetArrayParameter = require('./simRosSetArrayParameter.js')
let simRosGetObjectChild = require('./simRosGetObjectChild.js')
let simRosGetIntegerSignal = require('./simRosGetIntegerSignal.js')
let simRosClearStringSignal = require('./simRosClearStringSignal.js')
let simRosGetObjectParent = require('./simRosGetObjectParent.js')
let simRosSetIntegerParameter = require('./simRosSetIntegerParameter.js')
let simRosStopSimulation = require('./simRosStopSimulation.js')
let simRosSetObjectSelection = require('./simRosSetObjectSelection.js')
let simRosGetObjectGroupData = require('./simRosGetObjectGroupData.js')
let simRosGetFloatSignal = require('./simRosGetFloatSignal.js')
let simRosAddStatusbarMessage = require('./simRosAddStatusbarMessage.js')
let simRosSetVisionSensorImage = require('./simRosSetVisionSensorImage.js')
let simRosReadCollision = require('./simRosReadCollision.js')
let simRosGetFloatingParameter = require('./simRosGetFloatingParameter.js')
let simRosGetCollisionHandle = require('./simRosGetCollisionHandle.js')
let simRosCallScriptFunction = require('./simRosCallScriptFunction.js')

module.exports = {
  simRosGetUISlider: simRosGetUISlider,
  simRosCreateDummy: simRosCreateDummy,
  simRosGetCollectionHandle: simRosGetCollectionHandle,
  simRosGetObjectIntParameter: simRosGetObjectIntParameter,
  simRosDisableSubscriber: simRosDisableSubscriber,
  simRosGetDistanceHandle: simRosGetDistanceHandle,
  simRosClearIntegerSignal: simRosClearIntegerSignal,
  simRosPauseSimulation: simRosPauseSimulation,
  simRosEndDialog: simRosEndDialog,
  simRosAuxiliaryConsoleShow: simRosAuxiliaryConsoleShow,
  simRosSetIntegerSignal: simRosSetIntegerSignal,
  simRosSetFloatSignal: simRosSetFloatSignal,
  simRosSetFloatingParameter: simRosSetFloatingParameter,
  simRosGetUIButtonProperty: simRosGetUIButtonProperty,
  simRosGetDialogInput: simRosGetDialogInput,
  simRosGetVisionSensorImage: simRosGetVisionSensorImage,
  simRosGetAndClearStringSignal: simRosGetAndClearStringSignal,
  simRosGetObjectPose: simRosGetObjectPose,
  simRosTransferFile: simRosTransferFile,
  simRosAuxiliaryConsolePrint: simRosAuxiliaryConsolePrint,
  simRosAppendStringSignal: simRosAppendStringSignal,
  simRosLoadUI: simRosLoadUI,
  simRosCloseScene: simRosCloseScene,
  simRosGetIntegerParameter: simRosGetIntegerParameter,
  simRosBreakForceSensor: simRosBreakForceSensor,
  simRosEnablePublisher: simRosEnablePublisher,
  simRosGetArrayParameter: simRosGetArrayParameter,
  simRosGetJointMatrix: simRosGetJointMatrix,
  simRosAuxiliaryConsoleOpen: simRosAuxiliaryConsoleOpen,
  simRosGetObjects: simRosGetObjects,
  simRosReadForceSensor: simRosReadForceSensor,
  simRosSetBooleanParameter: simRosSetBooleanParameter,
  simRosGetUIEventButton: simRosGetUIEventButton,
  simRosSetUIButtonProperty: simRosSetUIButtonProperty,
  simRosSetUIButtonLabel: simRosSetUIButtonLabel,
  simRosCopyPasteObjects: simRosCopyPasteObjects,
  simRosClearFloatSignal: simRosClearFloatSignal,
  simRosGetLastErrors: simRosGetLastErrors,
  simRosRemoveUI: simRosRemoveUI,
  simRosSetJointPosition: simRosSetJointPosition,
  simRosGetModelProperty: simRosGetModelProperty,
  simRosReadVisionSensor: simRosReadVisionSensor,
  simRosReadDistance: simRosReadDistance,
  simRosGetVisionSensorDepthBuffer: simRosGetVisionSensorDepthBuffer,
  simRosLoadModel: simRosLoadModel,
  simRosSetJointTargetVelocity: simRosSetJointTargetVelocity,
  simRosSetObjectPosition: simRosSetObjectPosition,
  simRosSynchronous: simRosSynchronous,
  simRosGetInfo: simRosGetInfo,
  simRosSetObjectQuaternion: simRosSetObjectQuaternion,
  simRosDisablePublisher: simRosDisablePublisher,
  simRosEraseFile: simRosEraseFile,
  simRosRemoveModel: simRosRemoveModel,
  simRosGetStringParameter: simRosGetStringParameter,
  simRosReadProximitySensor: simRosReadProximitySensor,
  simRosSetObjectParent: simRosSetObjectParent,
  simRosSetObjectPose: simRosSetObjectPose,
  simRosSetObjectFloatParameter: simRosSetObjectFloatParameter,
  simRosGetObjectFloatParameter: simRosGetObjectFloatParameter,
  simRosSetSphericalJointMatrix: simRosSetSphericalJointMatrix,
  simRosDisplayDialog: simRosDisplayDialog,
  simRosAuxiliaryConsoleClose: simRosAuxiliaryConsoleClose,
  simRosSetJointForce: simRosSetJointForce,
  simRosEnableSubscriber: simRosEnableSubscriber,
  simRosGetObjectHandle: simRosGetObjectHandle,
  simRosStartSimulation: simRosStartSimulation,
  simRosSetJointState: simRosSetJointState,
  simRosGetDialogResult: simRosGetDialogResult,
  simRosRemoveObject: simRosRemoveObject,
  simRosGetBooleanParameter: simRosGetBooleanParameter,
  simRosSetUISlider: simRosSetUISlider,
  simRosSetModelProperty: simRosSetModelProperty,
  simRosSetObjectIntParameter: simRosSetObjectIntParameter,
  simRosGetObjectSelection: simRosGetObjectSelection,
  simRosSetStringSignal: simRosSetStringSignal,
  simRosLoadScene: simRosLoadScene,
  simRosGetStringSignal: simRosGetStringSignal,
  simRosGetJointState: simRosGetJointState,
  simRosGetUIHandle: simRosGetUIHandle,
  simRosSetJointTargetPosition: simRosSetJointTargetPosition,
  simRosSynchronousTrigger: simRosSynchronousTrigger,
  simRosSetArrayParameter: simRosSetArrayParameter,
  simRosGetObjectChild: simRosGetObjectChild,
  simRosGetIntegerSignal: simRosGetIntegerSignal,
  simRosClearStringSignal: simRosClearStringSignal,
  simRosGetObjectParent: simRosGetObjectParent,
  simRosSetIntegerParameter: simRosSetIntegerParameter,
  simRosStopSimulation: simRosStopSimulation,
  simRosSetObjectSelection: simRosSetObjectSelection,
  simRosGetObjectGroupData: simRosGetObjectGroupData,
  simRosGetFloatSignal: simRosGetFloatSignal,
  simRosAddStatusbarMessage: simRosAddStatusbarMessage,
  simRosSetVisionSensorImage: simRosSetVisionSensorImage,
  simRosReadCollision: simRosReadCollision,
  simRosGetFloatingParameter: simRosGetFloatingParameter,
  simRosGetCollisionHandle: simRosGetCollisionHandle,
  simRosCallScriptFunction: simRosCallScriptFunction,
};
