const CurrentDevices = require('../model/currentDevice');
const {deleteAllCurrentDevices} = require('../utils/delete');

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

   const result = await CurrentDevices.findByIdAndDelete(req.params.id)
   console.log('devices: ',result);
   res.status(200).json({success:true,data:{}})
}

// @desc Update Current Device
// @route PUT /api/v1/current/:id
// @access public
exports.updateCurrentDevice =async(req, res, next)=>{

   const {id} = req.params;
   
   const device = await CurrentDevices.findByIdAndUpdate(id,req.body,{
      new:true,
      runValidators:true
  });

  res.status(200).json(device)
}

// @desc Add New Device
// @route POST /api/v1/current/ 
// @access public
exports.addNewDevice =async(req, res, next)=>{

   const data ={
      ...req.body
   }   

   const device = await CurrentDevices.create(data);

   res.json({success:true,device})
  
}

// @desc Delete all current device from db
// @route DELETE /api/v1/current/ 
// @access private
exports.deleteEverything = async(req, res, next)=>{
   const device = await deleteAllCurrentDevices();

   res.status(201).json({success:true, device})
   
}




