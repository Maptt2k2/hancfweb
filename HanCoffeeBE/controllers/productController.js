import productModel from "../models/productModel.js";
import fs from 'fs';

// add product item

const addProduct = async (productData,res)=> {

    const product = new productModel({
        name:productData.name,
        price:productData.price,
        idCategory:productData.idCategory,
        description:productData.description,
        status:productData.status,
        id:productData.id,
        image:productData.image,
        quantity:productData.quantity
    })
    try {
        await product.save();
        res.json({success:true, message:"Product Added successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// all products list
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true, data:products})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//remove product item
const removeProduct = async (req, res) => {
    try {
        const productId = req.body.id;
        const product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Thay đổi trạng thái của sản phẩm thành 0 để ẩn sản phẩm
        product.status = 1; // Hoặc giá trị khác tùy vào logic của bạn

        await product.save();
        res.json({ success: true, message: 'Product removed successfully' });
    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({ success: false, message: 'Failed to remove product' });
    }
};

const editProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const updatedProduct = {
            name: req.body.name,
            price: req.body.price,
            idCategory: req.body.idCategory,
            description: req.body.description,
            status: req.body.status,
            quantity: req.body.quantity
        };

        if (req.file) {
            const product = await productModel.findById(productId);
            fs.unlink(`uploads/${product.image}`, () => {});
            updatedProduct.image = req.file.filename;
        }

        const product = await productModel.findByIdAndUpdate(productId, updatedProduct, { new: true });
        res.json({ success: true, message: "Product updated successfully", data: product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating product" });
    }
};


export { addProduct,listProducts,editProduct,removeProduct}

