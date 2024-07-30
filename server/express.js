const express= require('express');
const app=express();
const config=require('./config/config');
const mongoose=require('mongoose');
const authRoute=require('./router/auth.routes');
const userRoute=require('./router/user.routes');
const productRoute=require('./router/product.route');
const cors =require('cors');

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Enable sending cookies
    // method: ['GET', "POST","PUT","PATCH","DELTE","OPTIONS"],
  };

app.use(express.json());
app.use(cors(corsOptions));

app.use("/",authRoute);
app.use("/", userRoute);
app.use("/", productRoute);
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
