const mongoose = require('mongoose');

const deviceAgeSchema = new mongoose.Schema({

    DeviceName:{
        type:String
    },

    ShipDate:{
        type:String
    }
});

const DeviceAge = mongoose.model('neldevices',deviceAgeSchema);

module.exports = DeviceAge;