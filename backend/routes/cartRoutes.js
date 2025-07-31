import express from 'express';
import { addToCart, getCart } from '../controllers/cartController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/postaddToCart', authMiddleware, addToCart);
router.get('/getaddToCart', authMiddleware, getCart);

export default router;
