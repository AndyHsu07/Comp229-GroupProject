const User = require('../model/UserModel');

const hasAuthorization = async (req, res, next) => { 
    const user=await User.findById(req.params.id);

        console.log(req.auth);
        const authorized = req.auth && user._id ==  req.auth._id 
        
        if (!(authorized)) {
            return res.status('403').json({ error: "User is not authorized" }) 
            } 
        next()
    }




module.exports=hasAuthorization;