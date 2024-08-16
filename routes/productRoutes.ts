import express from 'express';
import { create, getInfo, getAll, block, unblock } from '../controllers/productController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, create);
router.get('/:id', protect, getInfo);
router.get('/', protect, getAll);
router.patch('/block/:id', protect, block);
router.patch('/unblock/:id', protect, unblock);

export default router;
