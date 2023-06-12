const User = require('../model/users');

exports.createUser = async(req, res)=>{

    try {
        const user = new User(req.body);
   
        const newUser = await user.save();

        if(!newUser){
            throw new Error('Unable to save user');
        }

        const token = await newUser.generateToken();

        res.status(201).send({newUser,token});

    } catch (error) {
        res.status(500).send({error:error.message})
    }
   
}

exports.login = async(req, res)=>{  
 
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password);

        const token = await user.generateToken();
    
        res.send({user, token});
    }catch(error){

        res.status(404).send({error:error.message})
    }

}

exports.webRegister = async(req, res)=>{
    
   const user = new User(req.body);

   const newUser = await user.save();

   const token = await user.generateToken();

   res.send({newUser, token});
}