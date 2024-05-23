require('dotenv').config({path:'./.env'});
const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');

//Models
const CurrentDevice = require('./model/currentDevice');

mongoose.connect('mongodb://127.0.0.1:27017/fmlDb', {useNewUrlParser:true, useUnifiedTopology: true})

//READ JSON Files
const currentDevice = JSON.parse(fs.readFileSync(`${__dirname}/_data/json/currentDevices.json`, 'utf-8'));

// Import Current Device
const importCurrentDevice = async()=>{
    try{
        const data  = await CurrentDevice.create(currentDevice);
        
        if(data != null){
            console.log('Data Imported....'.green.inverse)
        }
        process.exit(1);

    }catch(error){

        console.log(error);

        process.exit(1)
    }
}

// Delet Current Device
const deleteCurrentDevice = async()=>{
    try{
        const data  = await CurrentDevice.delete(currentDevice);
        
        if(data != null){
            console.log('Data Imported....'.red.inverse)
        }
        process.exit(1);

    }catch(error){

        console.log(error);

        process.exit(1)
    }
}

switch(process.argv[2]){

    case '-icd':
        importCurrentDevice();
        break;

    case '-dcd':
        deleteCurrentDevice();
        break;

        default:
            break;
}
