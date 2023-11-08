const fs = require('fs');
const mongoose = require('mongoose');
const CurrentRedcordTest = require('./model/currentRecordTest');

mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser:true, useUnifiedTopology: true});

const testJson = JSON.parse(fs.readFileSync(`${__dirname}/_data/test.json`, 'utf-8'));
const currentRecords = JSON.parse(fs.readFileSync(`${__dirname}/_data/currentRecords.json`, 'utf-8'));

console.log(testJson);
// console.log(currentRecords)
//Import TEST
const importTest = async()=>{
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


// Delete TEST
const deleteTest = async()=>{
    try{

        await CurrentDevices.deleteMany();
        
        console.log('Data Deleted...'.red.inverse);

        process.exit(1);

    }catch(error){

        console.log(error);
        process.exit(1)
    }
}
 