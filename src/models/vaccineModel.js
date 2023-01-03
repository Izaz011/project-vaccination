const {Schema,model}=require("mongoose")

const centreSchema=new Schema({
    centreName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    pincode:{
        type:String,
        required:true
    },
    availableSlots:[
        {
            _id:false,
            slot:{
                type:Number,
                required:true
            },
            availableDose:{
                type:Number,
                default:10
            }
        }
    ]
},{
    timestamps:true
})

module.exports=model("Centre",centreSchema)