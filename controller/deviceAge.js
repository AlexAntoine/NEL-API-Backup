const DeviceAge = require('../model/nelDevices');

// @desc Get all current devices for DB
// @route Get /api/v1/current
// @access public
exports.getAllDevices = async(req, res, next)=>{
    const data = await DeviceAge.find();
   
   res.status(200).json({success:true,count:data.length, data});

};

// @desc Get single device
// @route Get /api/v1/deviceage/:id
// @access public
exports.getSingleDevice = async(req, res, next)=>{

    const device = await DeviceAge.findById(req.params.id);
    res.json({success:true,data:device})
}

// @desc Delete single device
// @route Delete /api/v1/deviceage
// @access public
exports.deleteSingleDevices = async(req, res, next)=>{

    console.log(req.params);

    await DeviceAge.findByIdAndDelete(req.params.id);

    res.json({scucess: true, data:{}})

};

// @desc Update Device Age
// @route PUT /api/v1/deviceage/:id
// @access public
exports.updateDevice = async(req, res, next)=>{
    const {id} = req.params;

   
    const device = await DeviceAge.findByIdAndUpdate(id,req.body,{
        new:true,
        runValidators:true
    });

    res.status(200).json({success:true,device});

};

// @desc Add Device Age
// @route POST /api/v1/deviceage
// @access public
exports.addDeviceAge = async(req, res,next) =>{
   const data ={
    ...req.body
   }

   const result = await DeviceAge.create(data);

   res.status(200).json({success:true, result})
   console.log(result);
}
