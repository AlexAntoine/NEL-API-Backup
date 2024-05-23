const mongoose = require('mongoose');

const nelUsersSchema = new mongoose.Schema({

    CN:{
        type: String,
    },

    DisplayName:{
        type:String
    },

    SamAccountName:{
        type:String
    },

    UserPrincipalName:{
        type: String
    },

    Office:{
        type:String
    },

    Title:{
        type:String
    },

    Folder:{
        type:String
    },

   device_logs:[{
        computerName:String,
        date:String,
        client:String
    }]

});


const NelUsers = mongoose.model('nelUsers', nelUsersSchema);

module.exports = NelUsers;