const OldDevices = require('../model/oldDevices');

// @desc Get all old devices from DB
// @route Get /api/v1/old
// @access public
exports.getOldDevices = async(req, res, next)=>{
     const data = await OldDevices.find();
 
    res.status(200).json({success:true, count: data.length, data});
}

// @desc Get a single old device for DB
// @route Get /api/v1/old/:id
// @access public
exports.getSingleOldDevice = async()=>{

    const device = await OldDevices.findById(req.params.id);

    res.status(200).json({success:true,data:device});
}

// @desc Delete single old device
// @route Delete /api/v1/old/:id
// @access public
exports.deleteSingleDevice = async(req, res, next)=>{
    const device = await OldDevices.findByIdAndDelete(req.params.id);

    res.status(200).json({success:true,device:{}});
}

 