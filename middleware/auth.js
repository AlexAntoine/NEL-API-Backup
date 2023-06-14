const jwt = require('jsonwebtoken');
const User = require('../model/users');

const auth = async(req, res, next)=>{

    try {
        const token = req.header('Authorization').replace('Bearer ','');
        console.log('token: ', token)
        const decode = jwt.verify(token, 'abcd');
        console.log('decode: ', decode)
    
        const user = await User.findOne({_id:decode._id,'tokens.token':token});
        console.log('user: ', user)
        if(!user){
            throw new Error('User cannot be found.');
        }
    
        req.token = token;
        req.user = user;
    
        next();
        
    } catch (error) {
        console.log(error)
        res.status(401).send('Please Authenticate');
    }

  
}
module.exports = auth;