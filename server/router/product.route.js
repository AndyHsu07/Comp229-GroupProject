const express=require('express');
const router=express.Router();
const productCtrl=require('../controller/product.controller');
const requireSignin=require('../middleware/requireSignin');
const hasAuthorization=require('../middleware/hasAuthorization');


router.route('/api/product/:id')
    .get(productCtrl.getProduct)
    .delete(productCtrl.deleteProduct);

router.route('/api/products')
    .post(productCtrl.createProduct);

router.route('/api/products')
    .get(productCtrl.getAllProducts);


router.route('/api/product/:id')
    .patch(productCtrl.updateProduct);

module.exports=router;