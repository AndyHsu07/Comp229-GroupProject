const express=require('express');
const router=express.Router();
const userCtrl=require('../controller/user.controller');

router.route('/api/users')
    .get(userCtrl.getUser)

router.route('/api/users/:id')
    .get(userCtrl.getUser)





module.exports=router;