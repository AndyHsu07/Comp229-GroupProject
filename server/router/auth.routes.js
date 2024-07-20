const express=require('express');
const router=express.Router();
const authCtrl=require('../controller/auth.controller');




router.route('/auth/signup').post(authCtrl.signup)
router.route('/auth/signin').post(authCtrl.signin)
router.route('/auth/signout').get(authCtrl.signout)


module.exports=router;