import mongooes from "mongoose";

const userSchema = new mongooes.Schema({
    name:{
    type:String,
    require:true,
    trim:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
     required:true
    },
    profile:{
        imageName:String,
        address:String
    },
    isVerified:{
        type:Boolean,
        default:false
    }

},{versionKey:false});

export const User = mongooes.model("user",userSchema);