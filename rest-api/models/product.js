import mongoose from "mongoose";
import { type } from "os";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        default: 0
    },
    active:{
        type:Boolean,
        default:true
    },
    category:{
        type:String,
        required:true,
        enum: ['mouse', 'headset', 'keyboard']
    }
}, {
    timestamps:true
})

const productModel = mongoose.model("Product", productSchema)

export default productModel;