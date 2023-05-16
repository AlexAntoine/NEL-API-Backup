const NelUsers = require('../model/nelUsers');

// @desc Get all Nel Users
// @route Get /api/v1/nelusers
// @access public
exports.getNelUsers = async(req, res, next)=>{
    const users = await NelUsers.find();
    res.json({success:true,count: users.length,data:users})
}

// @desc Get single Nel User
// @route Get /api/v1/nelusers/:id
// @access public
exports.getSingleNelUser = async(req, res, next)=>{

    const user = await NelUsers.findById(req.params.id)
    res.json({success:true,data:user})
}

// @desc Delete single Nel User
// @route Delete /api/v1/neluusers
// @access public
exports.deleteSingleNelUser = async(req, res, next)=>{

    await NelUsers.findByIdAndDelete(req.params.id);

    res.json({scucess: true, data:{}})

};


// @desc Update NEL Users
// @route Update /api/v1/nelusers/:id
// @access public
exports.updateNelUsers = async(req, res, next)=>{
    
    const {id} = req.params;

    const device = await NelUsers.findByIdAndUpdate(id,req.body,{
        new:true,
        runValidators:true
    });

    res.json({success:true,device})
};


