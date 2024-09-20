  import User from '../models/userModel.js';
  import jwt from 'jsonwebtoken';
  import bcrypt from 'bcrypt';
  import nodemailer from 'nodemailer';
  import crypto from 'crypto';



  const generateToken = (id) => {
      return jwt.sign({ id }, 'your_jwt_secret', {
          expiresIn: '30d',
      });
  };

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'maptieuthu@gmail.com',
      pass: 'zpwv dhzj vyiv nnss'
    }
    
  });


  export const registerUser = async (req, res) => {
      const { email, password } = req.body;

      try {
          const userExists = await User.findOne({ email });
          if (userExists) {
              return res.status(400).json({ message: 'User already exists' });
          }

          const hashedPassword = await bcrypt.hash(password, 10);

          const user = await User.create({ email, password: hashedPassword });

          const token = generateToken(user._id);

          res.status(201).json({
              _id: user._id,
              email: user.email,
              token: token,
          });
      } catch (error) {
          console.error(error); 
          res.status(400).json({ message: 'Invalid user data' });
      }
  };

  export const authUser = async (req, res) => {
      const { email, password } = req.body;
      try {
        const user = await User.findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
          if (user && user.role !== undefined && (user.role === 0 || user.role === 1 || user.role === 2)) {
            const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
            res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
          } else {
            console.error('User role is undefined or invalid');
            res.status(400).json({ message: 'Invalid user role' });
          }
        } else {
          res.status(401).json({ message: 'Invalid email or password' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    };
    
    export const sendRandomPasswordEmail = async (req, res) => {
      const { email } = req.body;
  
      try {
          const user = await User.findOne({ email });
          if (!user) {
              return res.status(404).send({ message: 'Email không tồn tại' });
          }
  
          const randomPassword = crypto.randomBytes(8).toString('hex');
  
          const hashedPassword = await bcrypt.hash(randomPassword, 10);
  
          user.password = hashedPassword;
          await user.save();
  
          const mailOptions = {
              to: user.email,
              from: 'your-email@example.com',
              subject: 'Thư',
              text: `Chào`,
          };
          await transporter.sendMail(mailOptions);
  
          res.send({ message: 'Mật khẩu mới đã được gửi đến email của bạn.' });
      } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Có lỗi xảy ra khi gửi email.' });
      }
  };
    