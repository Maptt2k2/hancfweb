import categoryModel from "../models/categoryModel.js";
import fs from 'fs';

const addCategory = async (categoryData, res) => {
    const category = new categoryModel({
        name: categoryData.name,
        id: categoryData.id,
        status: categoryData.status,
        image: categoryData.image
    });
    
    try {
        await category.save();
        res.json({success: true, message: "Category added successfully"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error adding category"});
    }
};
//all categories list
const listCategories = async(req, res) =>{
    try {
        const categories = await categoryModel.find({});
        res.json({success:true, data:categories})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}



export {addCategory, listCategories}
