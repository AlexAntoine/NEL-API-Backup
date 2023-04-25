require('dotenv').config({path:'./.env'})
const mongoose = require('mongoose');

const localDb = async()=>{
    mongoose.set('strictQuery', true);
    const connect = await mongoose.connect('mongodb://127.0.0.1:27017/FMLdb',{useNewUrlParser:true, useUnifiedTopology: true});
    console.log('Database Connected'.cyan.underline.bold);
}

const prodDb = async()=>{
    mongoose.set('strictQuery', true);
    console.log('Connected to database....');
    return await mongoose.connect(process.env.PRODUCTION,{useNewUrlParser:true, useUnifiedTopology: true});
}

module.exports ={
    localDb,
    prodDb
} 