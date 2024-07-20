const User=require('../model/UserModel');
const mongoose=require('mongoose');



//get all users
const getAllUsers= async(req,res)=>{
    const users=await User.find({});
    return res.status(200).json(users);
}

//get user
const getUser= async (req,res)=>{
    const {id}=req.params;
    
    
    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'User not found'})
        }
    const user=await User.findById({_id: id});
    if(!user){
        return res.status(404).json({error: 'User not found'});
    }
        return res.status('200').json(user);
    
    
}


//update user
const updateUser= async(req, res)=>{
    const {id}= req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User not found'})

    }

    const user=await User.findByIdAndUpdate({_id: id},{
       ...req.body
    })

    res.status(200).json({message: "Update successfully"});
}


module.exports={getAllUsers, getUser,updateUser};