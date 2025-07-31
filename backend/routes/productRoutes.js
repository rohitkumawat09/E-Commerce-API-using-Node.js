import express from "express";
// import { uploadCloud } from "../middleware/cloudinaryUpload.js";
import {
  getAllProducts,
  addProduct,
  createForm,
  getAllProductsid
} from "../controllers/productController.js";

const router = express.Router();

import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/add", upload.single("image"), createForm);

router.get("/productsdetails", getAllProducts);
router.get("/productsdetails/:_id", getAllProductsid);

router.post("/add", addProduct  );

export default router;
