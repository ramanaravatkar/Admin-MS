import express from 'express';
import { getInfo, getAll, block, unblock } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:id', protect, getInfo);
router.get('/', protect, getAll);
router.patch('/block/:id', protect, block);
router.patch('/unblock/:id', protect, unblock);

export default router;
