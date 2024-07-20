const config=require('../config/config');
// const jwt =require('jsonwebtoken');
const {expressjwt} = require('express-jwt') ;


const requireSignin = expressjwt({ 
    secret: config.jwtSecret, 
    userProperty: 'auth',
    algorithms: ["HS256"],

    })

module.exports=requireSignin;