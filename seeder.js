require('dotenv').config({path:'./.env'});
const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');

//Models
const NelUsers = require('./model/nelUsers');
const DeviceAge = require('./model/nelDevices');
const CurrentDevices = require('./model/currentDevice');
const OldDevices = require('./model/oldDevices');
const CurrentRecords = require('./model/currentRecords');
const CurrentRecordTest = require('./model/currentRecordTest');

mongoose.connect('mongodb://127.0.0.1:27017/fmlDb', {useNewUrlParser:true, useUnifiedTopology: true})

//READ JSON Files
// const deviceAge = JSON.parse(fs.readFileSync(`${__dirname}/_data/deviceAge.json`, 'utf-8'));
const currentDevice = JSON.parse(fs.readFileSync(`${__dirname}/_data/currentDevices.json`, 'utf-8'));
// const oldDevice = JSON.parse(fs.readFileSync(`${__dirname}/_data/olddevice.json`, 'utf-8'));
// const nelUsers= JSON.parse(fs.readFileSync(`${__dirname}/_data/nelusers.json`, 'utf-8'));
// const currentRecords = JSON.parse(fs.readFileSync(`${__dirname}/_data/currentRecords.json`, 'utf-8'));
// const currentRecordsTest = JSON.parse(fs.readFileSync(`${__dirname}/_data/test.json`, 'utf-8'));

// Import Current Device
const importCurrentDevice = async()=>{
    try{
        const data  = await CurrentDevices.create(currentDevice);
        
        if(data != null){
            console.log('Data Imported....'.green.inverse)
        }
        process.exit(1);

    }catch(error){

        console.log(error);

        process.exit(1)
    }
}

// Delete NEL Users
const deleteCurrentDevice = async()=>{
    try{

        await CurrentDevices.deleteMany();
        
        console.log('Data Deleted...'.red.inverse);

        process.exit(1);

    }catch(error){

        console.log(error);
        process.exit(1)
    }
}
 
// Import into DB
const importDeviceAge = async()=>{

    try{
        await DeviceAge.create(deviceAge);
        
        console.log('Data Imported...'.green.inverse);

        process.exit(1);
    }catch(error){ 
        console.log(error);

        process.exit(1);
    }
}

const deleteDeviceAge = async()=>{

    try{

        await DeviceAge.deleteMany();

        console.log('Data Deleted...'.red.inverse);

        process.exit(1);

    }catch(error){

        console.log(error);

        process.exit(1);
    }
}

// Import Old Device
const importOldDevice = async()=>{

    try{
        await OldDevices.create(oldDevice);
        
        console.log('Data Imported...'.green.inverse);

        process.exit(1);
    }catch(error){ 
        console.log(error);

        process.exit(1);
    }
}
// Delete Old Device
const deleteOldDevice = async()=>{

    try{

        await OldDevices.deleteMany();

        console.log('Data Deleted...'.red.inverse);

        process.exit(1);

    }catch(error){

        console.log(error);

        process.exit(1);
    }
}

//Import NEL USERS
const importNelUsers = async()=>{

    try{
        await NelUsers.create(nelUsers);
        
        console.log('Data Imported...'.green.inverse);

        process.exit(1);
    }catch(error){ 
        console.log(error);

        process.exit(1);
    }
}

// Delete NEL USERS
const deleteNelUsers = async()=>{

    try{

        await NelUsers.deleteMany();

        console.log('Data Deleted...'.red.inverse);

        process.exit(1);

    }catch(error){

        console.log(error);

        process.exit(1);
    }
}

// Import Current Records
const importCurrentRecords = async()=>{
    try{
        const data  = await CurrentRecords.create(currentRecords);
        
        if(data != null){
            console.log('Data Imported....'.green.inverse)
        }
        process.exit(1);

    }catch(error){

        console.log(error);

        process.exit(1)
    }
}

// Delete Current Records 
const deleteCurrentRecords = async()=>{

    try{

        await CurrentRecords.deleteMany();

        console.log('Data Deleted...'.red.inverse);

        process.exit(1);

    }catch(error){

        console.log(error);

        process.exit(1);
    }
}
 
// Import Current Records 2
const importCurrentRecordsTest = async()=>{
    try{
        const data  = await CurrentRecordTest.create(currentRecordsTest);
        
        if(data != null){
            console.log('Data Imported....'.green.inverse)
        }
        process.exit(1);

    }catch(error){

        console.log(error);

        process.exit(1)
    }
}

// Delete Current Records 2
const deleteCurrentRecordTest = async()=>{

    try{

        await CurrentRecordTest.deleteMany();

        console.log('Data Deleted...'.red.inverse);

        process.exit(1);

    }catch(error){

        console.log(error);

        process.exit(1);
    }
}
switch(process.argv[2]){

    case '-inel':
        importNelUsers();
        break;
    case '-dnel':
        deleteNelUsers();
        break;
    case '-ida':
        importDeviceAge();
        break;
    case '-dda':
        deleteDeviceAge();
        break;
    case '-icd':
       importCurrentDevice();
        break;
    case '-dcd':
        deleteCurrentDevice();
            break;
    case '-iod':
        importOldDevice();
            break;
    case '-dod':
        deleteOldDevice();
            break;
    case '-i':
       importNelUsers();
            break;
    case '-d':
        deleteNelUsers();
            break;
    case '-icr':
        importCurrentRecords();
            break;
    case '-dcr':
        deleteCurrentRecords();
            break;
    case '-icr2':
        importCurrentRecordsTest();
            break;
    case '-dcr2':
        deleteCurrentRecordTest();
            break;
}
