import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";
import bodyParser from "body-parser";

import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

mongoose.connect(process.env.DB_URL)
.then(result=>{
     app.use(cors())
    app.use(cookieParser())
   
    // app.use(bcryptjs());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use("/user",UserRouter);
    
    app.listen(process.env.PORT,()=>{
        console.log("Server Started..");
    });
}).catch(err=>{
    console.log("Database connection faild",err);
})