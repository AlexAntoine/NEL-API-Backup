const CurrentDevices = require('../model/currentDevice');
const {deleteAllCurrentDevices} = require('../utils/delete');

// @desc Get all current devices for DB
// @route Get /api/v1/current
// @access public
exports.getCurrentDevices = async(req, res, next)=>{
   res.status(200).json(res.advancedResults);
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
   res.status(204).json({success:true,data:{}})
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
exports.updateDataFromLogon =async(req, res, next)=>{

   try {
      const countDocs = await CurrentDevices.countDocuments({SerialNumber:req.body.SerialNumber})
      // console.log(countDocs);

      if(countDocs == 0){
       
         const data = {
            ...req.body
           }
         
           const device = await CurrentDevices.create(data);
         
           res.status(200).json({success:true, device});
      }
      else{
        let thisDevice = await CurrentDevices.findOne({SerialNumber:req.body.SerialNumber});
         thisDevice.ComputerName = req.body.ComputerName;
         thisDevice.Manufacturer = req.body.Manufacturer;
         thisDevice.ModelNumber = req.body.ModelNumber;
         thisDevice.OsVersion = req.body.OsVersion;
         thisDevice.ChassisTypesRaw = req.body.ChassisTypesRaw;
         thisDevice.LastLogin = req.body.LastLogin;
         thisDevice.GetLastDeviceLogin = req.body.GetLastDeviceLogin;
         
         const log = Object.assign({date:req.body.LastLogin},{username:req.body.GetLastDeviceLogin});

         thisDevice.logs.push(log);
         
         thisDevice.save();
   
         res.status(200).json({success:true, thisDevice});
      }

      } catch (error) {
         res.status(400).send({error:error.message})
      }

}

// @desc Delete all current device from db
// @route DELETE /api/v1/current/ 
// @access private
exports.deleteEverything = async(req, res, next)=>{
   const device = await deleteAllCurrentDevices();

   res.status(201).json({success:true, device})
   
}




