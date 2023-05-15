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
exports.getSingleOldDevice = async(req,res)=>{

    const device = await OldDevices.findById(req.params.id);

    res.status(200).json({success:true,data:device});
}

// @desc Delete single old device
// @route Delete /api/v1/old/:id
// @access public
exports.deleteSingleDevice = async(req, res, next)=>{
    const device = await OldDevices.findByIdAndDelete(req.params.id);

    res.status(200).json({success:true,device});
}

// @desc Update old Device
// @route PUT /api/v1/old/:id
// @access public
exports.updateOldDevice= async(req, res, next)=>{
   const {id} = req.params;

   const device = await OldDevices.findByIdAndUpdate(id,req.body,{
       new:true,
       runValidators:true
   });

   res.status(200).json({success:true,device})

}

 