import express from 'express';
import { protectRoute } from '../middleware/protectRoutes.js';
import { getAllUsers } from '../controllers/users/userController.js';

const router =  express.Router();
router.get("/",protectRoute,getAllUsers);

export default router;
