const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

    name:String,
    email:String,
    api_key:String,
    password:String,
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },

    tokens:[{
        token:{type:String, required:true} 
    }]
});

userSchema.pre('save',async function(next){
    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

userSchema.methods.generateToken = async function(){

    const user = this;

    const token = await jwt.sign({_id:user._id.toString()},'abcd');

    if(!token){
        throw new Error('Token could not be generated');
    }

    user.tokens = user.tokens.concat({token});

    await user.save();

    return token;

};

userSchema.statics.findByCredentials = async(email,password)=>{
    const user = await Users.findOne({email});

    if(!user){
        throw new Error('Your credentials do not macth our records')
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if(!isMatched){
        throw new Error('Your credentials do not macth our records');
    }

    return user;
}

// userSchema.statics.generateTokenWeb = async()=>{
//     const user = this;

//     const token = await jwt.sign({_id:user._id.toString()},'abcd');

//     if(!token){
//         throw new Error('Token could not be generated');
//     }

//     user.tokens = user.tokens.concat({token});

//     await user.save();

//     return token
// }

const Users = mongoose.model('users',userSchema);

module.exports = Users;