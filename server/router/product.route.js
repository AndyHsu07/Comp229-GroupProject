const express=require('express');
const router=express.Router();
const productCtrl=require('../controller/product.controller');
const requireSignin=require('../middleware/requireSignin');
const hasAuthorization=require('../middleware/hasAuthorization');


router.route('/:id')
    .get(productCtrl.getProduct)
    .delete(productCtrl.deleteProduct);

router.route('/')
    .post(productCtrl.createProduct);

router.route('/')
    .get(productCtrl.getAllProducts);




router.route('/:id')
    .patch(productCtrl.updateProduct);

module.exports=router;