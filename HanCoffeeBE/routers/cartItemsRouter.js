import express from 'express'
import authMiddleware from '../middleware/auth.js';
import { addToCart, removeFromCart, fetchAllCartItems } from '../controllers/cartIitemsController.js'
const cartItemsRouter = express.Router()
cartItemsRouter.post("/add",authMiddleware,addToCart)
cartItemsRouter.post("/remove",authMiddleware,removeFromCart)
cartItemsRouter.get("/get",authMiddleware,fetchAllCartItems)

export default cartItemsRouter;