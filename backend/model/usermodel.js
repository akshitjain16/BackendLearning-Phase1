import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Phone_Number:{
        type:Number,
        required:true
    },
    Hobbies:{
        type:String,
        required:true
    }
})


export default mongoose.model("User", userSchema);