const mongoose=require("mongoose");

const staffSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlenght:50
        },
        availability:{
            type:Boolean,
            required:true
        },
        workingHours:{
            type:Array,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now()
   },  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderData'
}],
       
    }
)
module.exports=mongoose.model("staffModel",staffSchema);