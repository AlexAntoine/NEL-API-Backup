const mongoose = require('mongoose');

const currentDevicesSchema = new mongoose.Schema({

    ComputerName:{
        type:String
    },

    Manufacturer:{
        type:String
    },

    SerialNumber:{
        type:String
    },

    ModelNumber:{
        type:String
    },

    OsVersion:{
        type:String
    },
    ChassisTypesRaw:{
        type:String
    },

    ShipDate:{
        type:String
    },

    Age:{
        type:String
    },

    CurrentYear:{
        type:String
    },

    CompId:{
        type:String
    },

    ReplacementCost:{
        type:String
    },

    Type:{
        type:String
    },

    assignedTo:{
        type:String
    },

    shouldRetire:{
        type:String
    },

    oldEnough:{
        type:String
    },

    ChassisType:{
        type:String
    },

    ChassisSubType:{
        type:String
    },

    notes:{
        type:String
    },

    LastLogin:{
        type:String
    },

    GetLastDeviceLogin:{
        type:String
    },

   

});

const CurrentDevices = mongoose.model('currentDevices', currentDevicesSchema);

module.exports = CurrentDevices;