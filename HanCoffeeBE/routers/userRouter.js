
import express from 'express';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { authUser, registerUser, sendRandomPasswordEmail } from '../controllers/userController.js';


const router = express.Router();

router.post('/register', registerUser);

router.post('/login', authUser);

router.post('/forgot-password', sendRandomPasswordEmail);

export default router;


