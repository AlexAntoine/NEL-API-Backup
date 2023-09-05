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

    logged:[{
        type:mongoose.Schema.Types.ObjectId,
        name:String,
        date:String,
        ref:'currentDevices'
    }],

});

nelUsersSchema.virtual('currentDevices',{
    ref:'currentDevices',
    localField:'',
    foreignField:''
});


const NelUsers = mongoose.model('nelUsers', nelUsersSchema);

module.exports = NelUsers;