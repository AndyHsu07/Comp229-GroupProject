const express=require('express');
const router=express.Router();
const authCtrl=require('../controller/auth.controller');
const userCtrl=require('../controller/user.controller');
const requireSignin=require('../middleware/requireSignin');
const hasAuthorization=require('../middleware/hasAuthorization');


router.route('/api/users')
    // .get(requireSignin)
    // .get(hasAuthorization)
    .get(userCtrl.getAllUsers)

router.route('/api/users/:id')
    // .get(requireSignin)
    // .get(hasAuthorization)
    .get(userCtrl.getUser)

router.route('/api/users/:id')
    .get(requireSignin)
    .get(hasAuthorization)
    .patch(userCtrl.updateUser)

router.route('/api/users/:id')
    .get(requireSignin)
    .get(hasAuthorization)
    .delete(userCtrl.deleteUser)

module.exports=router;