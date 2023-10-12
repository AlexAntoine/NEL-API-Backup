const CurrentDevices = require('../model/currentDevice');

exports.deleteAllCurrentDevices = async(req, res)=>{

    try {
        const device = await CurrentDevices.deleteMany();

        return res.status(202).json({success:true, device})

    } catch (error) {
        
        console.log(error);

       return res.status(500).json({success:false,message:'Unable to preform action'});
    }
   
}