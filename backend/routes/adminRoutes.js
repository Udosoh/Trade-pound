
import express from 'express';

const router = express.Router();

import {
  getAllUsers, searchUserByEmail, changeAccountStatus
} from '../controllers/adminController.js';

//import {isAdmin} from '../middleware/authMiddleware.js'


router.get('/getAllUsers', getAllUsers);
router.post("/search", searchUserByEmail)
router.put('/changeAccountStatus/:id', changeAccountStatus)

export default router