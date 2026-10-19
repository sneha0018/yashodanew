const express = require('express');
const Admin = require('../models/Admin')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();



//Admin Login route
router.post('/adminlogin', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        console.log('Admin not found for email:', email);
        return res.status(404).json({ message: 'Admin not found' });
      }
  
      console.log('Found user:', admin);
  
      // Compare the entered password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, admin.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid Password" });
      }
  
      console.log('User authenticated successfully:', email);
  
      const payload = { admin: { id: admin._id } };
      jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1d' }, (err, token) => {
        if (err) throw err;
        res.json({
          token,
          admin: {
            name: admin.name,
            email: admin.email,
            
          
            // Add more fields as needed
          }
        });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  
  //Admin  Signup route
  router.post('/adminsignup', async (req, res) => {
    try {
      const { email,name, password, confirmPassword} = req.body;
  
      // Email validation using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
      }
  
      if (!email || !name || !password || !confirmPassword ) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match." });
      }
  
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin already exists' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newAdmin = new Admin({
        
        email,
        name,
        password: hashedPassword,      
      });
  
      await newAdmin.save();   
  
      // Generate a JWT token for the authenticated user   
      const payload = { admin: { id: newAdmin._id.toString() } };
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
  
      res.status(201).json({ message: "Registered Successfully", newAdmin, token });
    } catch (error) {
      console.error("Error in signup route:", error); // Log the full error
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  module.exports = router;