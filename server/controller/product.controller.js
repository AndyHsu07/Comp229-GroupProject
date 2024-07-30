
const Product=require('../model/ProductModel');
const mongoose=require('mongoose');



//create a product
const createProduct= async(req,res)=>{

    try{
        const newProduct=await Product.create(req.body);
        newProduct.save();
        res.status(200).json({message: "The Product is added sucessfully"});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

//get all products
const getAllProducts= async(req,res)=>{
    const products=await Product.find({});
    return res.status(200).json(products);
}



//get a product
const getProduct= async (req,res)=>{
    const {id}=req.params;
    
    
    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Product not found'})
        }
    const product=await Product.findById({_id: id});
    if(!product){
        return res.status(404).json({error: 'Product not found'});
    }
        return res.status('200').json(product);
    
    
}


//update a product
const updateProduct= async(req, res)=>{
    const {id}= req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Product not found'})

    }

    const product=await Product.findByIdAndUpdate({_id: id},{
       ...req.body
    })

    res.status(200).json({message: "Update successfully"});
}


const deleteProduct = async( req,res )=>{
    const {id}= req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Product not found'})
    }

    const product = await Product.findByIdAndDelete(id);
    if(!product){
        return res.status(404).json({error: 'Product not found'})
    }

    res.status(200).json({message: "The product is deleted successfully"})
}


module.exports={createProduct, getAllProducts, getProduct, updateProduct ,deleteProduct};