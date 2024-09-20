import express from 'express'
import { addToCart, removeFromCart } from '../controllers/cartController';
import { addToCart,removeFromCart,getCart } from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js';
const cartRouter = express.Router();


export default cartRouter;