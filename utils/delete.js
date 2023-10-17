const CurrentDevices = require('../model/currentDevice');
const DeviceAge = require('../model/nelDevices');
const NelUsers = require('../model/nelUsers');
const CurrentRecords = require('../model/currentRecords')

const deleteCurrentRecords = async(req, res)=>{

    try {
        const device = await CurrentRecords.deleteMany();

        return device;

    } catch (error) {
        
        console.log(error);

    }
   
}

const deleteAllCurrentDevices = async(req, res)=>{

    try {
        const device = await CurrentDevices.deleteMany();

        return device;

    } catch (error) {
        
        console.log(error);

    }
   
}

const deleteAllNelDevices = async(req, res)=>{

    try {
        const device = await DeviceAge.deleteMany();

        return device;

    } catch (error) {
        
        console.log(error);

    }
}

const deleteAllNelUser = async(req, res)=>{

    try {
        const device = await NelUsers.deleteMany();

        return device;

    } catch (error) {
        
        console.log(error);

    }
}

module.exports = {
    deleteAllCurrentDevices,
    deleteAllNelDevices,
    deleteAllNelUser,
    deleteCurrentRecords
}