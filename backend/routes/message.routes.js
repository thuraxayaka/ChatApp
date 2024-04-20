import express from 'express';
import { sendMessage,getMessage } from '../controllers/messages/messageControllers.js';

//middleware 
import { protectRoute } from '../middleware/protectRoutes.js';
const router = express.Router();

router.post("/send/:id",protectRoute,sendMessage);
router.get("/:id",protectRoute,getMessage);

export default router;