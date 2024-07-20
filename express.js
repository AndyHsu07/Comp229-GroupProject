const express= require('express');
const app=express();
const config=require('./server/config/config');
const mongoose=require('mongoose');
const authRoute=require('./server/router/auth.routes');
const userRoute=require('./server/router/user.routes');

app.use(express.json());

app.use("/",authRoute);
app.use("/", userRoute);
app.use("/",(req,res,next)=>{
    res.send("Home Page");
})


mongoose.connect(config.MONGO_URL)
    .then(()=>{
        //listener
        app.listen(config.PORT,()=>{
            console.log("connected to database successfully...");
            console.log(`Listening on Port ${config.PORT}`);
        })
    
    })
    .catch((error)=>{
        console.log(error);
    })


module.exports=app;
