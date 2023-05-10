require('dotenv').config({path:'./.env'});
const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');

//Models
const NelUsers = require('./model/nelUsers');
const DeviceAge = require('./model/nelDevices');


mongoose.connect('mongodb://127.0.0.1:27017/fmlDb', {useNewUrlParser:true, useUnifiedTopology: true})

//READ JSON Files
const deviceAge = JSON.parse(fs.readFileSync(`${__dirname}/_data/deviceAge.json`, 'utf-8'));

// Import NEL Users
const importNelUsers = async()=>{
    try{
        const data  = await NelUsers.create(users);
        
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
const deleteNelUsers = async()=>{
    try{

        await NelUsers.deleteMany();
        
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

switch(process.argv[2]){

    // case '-i':
    //     importData();
    // break

    // case '-d':
    //     deleteData();
    //     break;
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
}
