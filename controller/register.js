const User = require('../model/users');

exports.createUser = async(req, res)=>{
   const user = new User(req.body);
   
   const newUser = await user.save();

   const token = await newUser.generateToken();

   res.status(201).send({newUser,token});
}

exports.login = async(req, res)=>{  
 
    const user = await User.findByCredentials(req.body.email,req.body.password);
    const token = await user.generateToken();

    res.send({user, token});

}