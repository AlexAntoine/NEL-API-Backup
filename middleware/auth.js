const jwt = require('jsonwebtoken');
const User = require('../model/users');

const auth = async(req, res, next)=>{

    try {
        const token = req.header('Authorization').replace('Bearer ','');

        const decode = jwt.verify(token, 'abcd');
    
        const user = await User.findOne({_id:decode._id,'tokens.token':token});
    
        if(!user){
            throw new Error('User cannot be found.');
        }
    
        req.token = token;
        req.user = user;
    
        next();
        
    } catch (error) {
        res.status(401).send('Please Authenticate');
    }

  
}
module.exports = auth;