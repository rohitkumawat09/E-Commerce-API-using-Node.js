import express from 'express';
import { addToCart, getCart } from '../controllers/cartController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /cart/postaddToCart:
 *   post:
 *     summary: Add item to cart
 *     tags: [Cart]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Item added to cart successfully
 *       400:
 *         description: Failed to add item
 */
router.post('/postaddToCart', authMiddleware, addToCart);

/**
 * @swagger
 * /cart/getaddToCart:
 *   get:
 *     summary: Get all items in cart
 *     tags: [Cart]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of cart items
 */
router.get('/getaddToCart', authMiddleware, getCart);

export default router;
