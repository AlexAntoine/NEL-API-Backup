const mongoose = require('mongoose');

const currentRecordsSchema = new mongoose.Schema({

    UserName:{
        type:String
    },

    DeviceName:{
        type:String
    },
    
    LoginCount:{
        type:String
    },

    Date:{
        type:String,
    },

    Client:{
        type:String
    }
});

const CurrentRecords = mongoose.model('currentRecords', currentRecordsSchema);

module.exports = CurrentRecords;