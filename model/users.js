const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:String,
    email:String,
    api_key:String,

    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },

    tokens:[{
        token:{type:String, required:true} 
    }]
});

const Users = mongoose.model('users',userSchema);

module.exports = Users;