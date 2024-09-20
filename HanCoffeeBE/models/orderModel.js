import mongoose from "mongoose";


const orderSchema = new mongoose.OrderSchema({
    date:{type:Date,default:Date.now()},
    id:{type:String ,required:true},
    idCategory:{type:String,required:true},
    idUser:{type:String ,required:true},
    price:{type:Number ,required:true}
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;