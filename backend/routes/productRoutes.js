import express from "express";
import {
  getAllProducts,
  createForm,
  getAllProductsid,
  CartData,
  getCartData,
  removeFromCart,
  wishlist,
  getWishlistData,
  wishListRemoveData
} from "../controllers/productController.js";
import authMiddleware from '../middleware/authMiddleware.js';

import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

/**
 * @swagger
 * /product/add:
 *   post:
 *     summary: Create a new product with image upload
 *     tags: [Product]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Product created successfully
 *       500:
 *         description: Product creation failed
 */
router.post("/add", upload.single("image"), createForm); // This handles with image

/**
 * @swagger
 * /product/productsdetails:
 *   get:
 *     summary: Get all products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: List of all products
 *       500:
 *         description: Failed to fetch products
 */
router.get("/productsdetails", getAllProducts);

/**
 * @swagger
 * /product/productsdetails/{_id}:
 *   get:
 *     summary: Get a single product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product found
 *       404:
 *         description: Product not found
 */
router.get("/productsdetails/:_id", getAllProductsid);


router.delete("/cart/:id", authMiddleware, removeFromCart);

router.post("/cart/:id",authMiddleware,CartData);
router.get("/cart/data",authMiddleware,  getCartData);

router.post("/wishlist/:id",authMiddleware,wishlist);
router.get("/wishlist/Data",authMiddleware,getWishlistData)


router.delete("/wishList/remove/:id",authMiddleware, wishListRemoveData);

export default router;
