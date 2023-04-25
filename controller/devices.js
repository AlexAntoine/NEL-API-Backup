const CurrentDevices = require('../model/currentDevice');

// @desc Get all current devices for DB
// @route Get /api/v1/current
// @access public
exports.getCurrentDevices = async(req, res, next)=>{
   
   const data = await CurrentDevices.find();

   res.status(200).json({success:true, count:data.length, data});

};

// @desc Get single current device
// @route Get /api/v1/current/:id
// @access public
exports.getSingleCurrentDevice = async(req, res, next)=>{
    const device = await CurrentDevices.findById(req.params.id);
   
   res.status(200).json({success:true,device})
}


// @desc Delete Single current Device
// @route Delete /api/v1/current/:id
// @access public
exports.deleteSingleCurrentDevice = async(req, res,next)=>{

    const device = await CurrentDevices.findByIdAndDelete(req.params.id)
   
   res.status(200).json({success:true,device:{}})
}


