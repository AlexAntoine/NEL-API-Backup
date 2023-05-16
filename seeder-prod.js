require('dotenv').config({path:'./.env'});
const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');

//Models
const NelUsers = require('./model/nelUsers');
const DeviceAge = require('./model/nelDevices');
const CurrentDevices = require('./model/currentDevice');


mongoose.connect(process.env.PRODUCTION, {useNewUrlParser:true, useUnifiedTopology: true})

//READ JSON Files

const users= JSON.parse(fs.readFileSync(`${__dirname}/_data/nelusers.json`, 'utf-8'));
const currentDevice= JSON.parse(fs.readFileSync(`${__dirname}/_data/currentDevice.json`, 'utf-8'));
// const deviceAge = JSON.parse(fs.readFileSync(`${__dirname}/_data/deviceAge.json`, 'utf-8'));

// Import Current Devices
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

// const importData = async()=>{

//     try {
//         await Bootcamp.create(bootcamps);
//         await Course.create(courses);
//         await User.create(users);
//         await Reviews.create(reviews)

//         console.log('Data imported...'.green.inverse)

//         process.exit(1);
//     } catch (error) {

//         console.log(error);
//         process.exit(1);
//     }
// }

// //Delete Data

// const deleteData = async()=>{

//     try {
//         await Bootcamp.deleteMany();
//         await Course.deleteMany();
//         await User.deleteMany();
//         await Reviews.deleteMany();

//         console.log('Data destroyed...'.red.inverse)

//         process.exit(1);
//     } catch (error) {

//         console.log(error);
//     }
// }

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
}
