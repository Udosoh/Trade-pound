
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.status(201).json({data:users})

  });

  const searchUserByEmail = asyncHandler( async(req, res) => {

    const { email } = req.body
    if (!email) {
        res.status(401)
        throw new Error("Please provide an email")
    }

    let user = await User.find({ email })
  
    if(!user){
        res.status(401)
        throw new Error("Invalid User Email")
    }
    if(user){
      res.json({
        _id: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        status: user.status,
        selectedPackage :user.selectedPackage,
      });
    } 

})

const changeAccountStatus = asyncHandler(async (req, res) => {

  const userAccount = await User.findById(req.params.id)

    if(!userAccount){
        res.status(400)
        throw new Error ("User not found")
    }

    const updatedItem = await User.findByIdAndUpdate(req.params.id, 
        req.body, {
            new: true,
        })

    res.status(200).json({message: "User Updated successfully ", updatedItem})
    
});

export {
    getAllUsers, searchUserByEmail, changeAccountStatus
}
