const User = require('../model/UserModel');
const jwt =require('jsonwebtoken');
const {expressjwt} = require('express-jwt') ;
const config = require('../config/config') ;
const cookie= require('cookie-parser');

const signup= async(req,res)=>{


    try{
            const newUser=await User.create(req.body);
            newUser.save();
            res.status(200).json({message: "User is created sucessfully"}); 
        
        
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
  
  
}

const signin = async (req, res) => { 
    try {
        const user = await User.findOne({ "email": req.body.email }) 
        
        if (!user){
            return res.status('401').json({ error: "User not found" }) 
            }

        if (!user.authenticate(req.body.password)) {
            return res.status('401').send({ error: "Email and password don't match." })
            }
        const token = jwt.sign({ _id: user._id }, config.jwtSecret) 
        res.cookie('t', token, { expire: new Date() + 9999 }) 
    
        return res.json({
                token, 
                user: {
                    _id: user._id, 
                    name: user.name,
                    email: user.email 
                }
                })
    }
    catch (err) {
        return res.status('401').json({ error: "Could not sign in" }) 
    }
    }
    
const signout = (req, res) => { 
        res.clearCookie("t")
        return res.status('200').json({ message: "signed out"}) 
    }


const requireSignin = expressjwt({ 
        secret: config.jwtSecret, 
        userProperty: 'auth',
        algorithms: ["HS256"],

        })

const hasAuthorization = async (req, res, next) => { 
    
    const user=await User.findById(req.params.id);
        const authorized = req.auth && user._id ==  req.auth._id 
        // console.log(authorized);
        if (!(authorized)) {
            return res.status('403').json({ error: "User is not authorized" }) 
            } 
        next()
    }
    

module.exports ={ signup,signin, signout,requireSignin, hasAuthorization }