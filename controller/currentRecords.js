const CurrentRecords = require('../model/currentRecords');
const deleteCurrentRecords = require('../utils/delete');

// @desc Get All Current Records
// @route Get /api/records
// @access public
exports.getAllCurrentRecords = async(req, res)=>{
    res.status(200).json(res.advancedResults);
}

// @desc Get Single Current Record
// @route Get /api/records/:id
// @access public
exports.getSingleRecord = async(req, res, next)=>{

    const record = await CurrentRecords.findById(req.params.id);
    res.json({success:true,data:record})
}

// @desc Add New Record
// @route POST /api/records
// @access public
exports.addNewRecord = async(req, res,next) =>{
    const data ={
     ...req.body
    }
 
    const result = await CurrentRecords.create(data);
 
    res.status(200).json({success:true, result})
    
 }

// @desc Update Current Records
// @route PUT /api/records/:id
// @access public
exports.updateSingleRecord = async(req, res, next)=>{
    const {id} = req.params;
   
    const record = await CurrentRecords.findByIdAndUpdate(id,req.body,{
        new:true,
        runValidators:true
    });

    res.status(200).json({success:true,record});

};

// @desc Delete single Record
// @route Delete /api/records/:id
// @access public
exports.deleteSingleRecord = async(req, res, next)=>{

    await CurrentRecords.findByIdAndDelete(req.params.id);

    res.status(201).json({scucess: true, data:{}})

};

// @desc Delete single Record
// @route Delete /api/records/:id
// @access public
exports.deleteAllCurrentRecords = async(req, res, next)=>{

   const result = await deleteCurrentRecords();

   res.status(200).json({success:true, result})

};