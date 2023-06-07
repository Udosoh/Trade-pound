
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
  
      res.json({
        _id: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        status: user.status,
        selectedPackage :user.selectedPackage,
        role:user.role,
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
    
  });

  const registerUser = asyncHandler(async (req, res) => {
   const { userName, firstName, lastName, selectedPackage, status, email, role, password } = req.body;
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }
  
    const user = await User.create({
      userName,
      firstName,
      lastName,
      selectedPackage,
      status,
      role,
      email,
      password,
    });
  
    if (user) {
      generateToken(res, user._id); 
      res.status(201).json({
        _id: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        status: user.status,
        selectedPackage :user.selectedPackage,
        role:user.role,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data, complete all required field');
    }

  });

  const logoutUser = (req, res) => {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
  
    res.status(200).json({ message: 'Logged out successfully' });
  
  };

  const getUserProfile = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id);
  
    if (user) {
      res.json({
        _id: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        status: user.status,
        selectedPackage :user.selectedPackage,
        role:user.role,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
    

  });

  
  
  

  export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,  
  };
