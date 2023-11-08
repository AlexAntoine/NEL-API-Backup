const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  type:Object,
  DeviceName: String,
  LoginCount: String,
  Date:String
})


const UserSchema = new mongoose.Schema({
  UserName:{
    type:Array,
   
  },

  logs:[logSchema],

  
});


const CurrentRecordTest = mongoose.model('currentRecordTest', UserSchema);

module.exports = CurrentRecordTest;