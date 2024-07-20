const express=require('express');
const router=express.Router();
const authCtrl=require('../controller/auth.controller');
const userCtrl=require('../controller/user.controller');

router.route('/api/users')
    .get(authCtrl.requireSignin)
    .get(authCtrl.hasAuthorization)
    .get(userCtrl.getAllUsers)

router.route('/api/users/:id')
.get(authCtrl.requireSignin)
.get(authCtrl.hasAuthorization)
    .get(userCtrl.getAllUsers)





module.exports=router;