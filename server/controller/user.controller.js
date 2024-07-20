const User=require('../model/UserModel');
const mongoose=require('mongoose');

//get user
const getAllUsers= async (req,res)=>{
    const {id}=req.params;
    

    console.log(id);
    if(isNaN(id)){
        const Users=await User.find({});
         return  res.status(200).json(Users);
    }else{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'User not found'})
        }
    const User=await User.findById({_id: id});
    if(!User){
        return res.status(404).json({error: 'User not found'});
    }
        return res.status('200').json(user);
    }
    
}


module.exports={getAllUsers};