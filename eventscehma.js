const mongoose=require("mongoose")



const eventSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    payment:{
        type:Number,
        required:true
    },
    
    time:{
        type:String,
        required:true
    }
    

})

const Events=mongoose.model("events",eventSchema)
module.exports=Events
