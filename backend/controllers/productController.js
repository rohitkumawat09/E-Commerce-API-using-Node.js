import product from "../models/Product.js";
import cloudinary from "../config/cloudinary.js"


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});





function uploadToCloudinary(buffer, folder) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (err, result) => {
        if (result) resolve(result);
        else reject(err);
      }
    );
    stream.end(buffer);
  });
}
export async function createForm(req, res) {
  console.log("first");
  console.log(req.body);
  console.log(req.file);

  try {
    const imageUrl = req.file ? req.file.path : "";
   

    let postPicUrl = null;
    if (req.file) {
      const uploaded = await uploadToCloudinary(req.file.buffer, "post_pics");
      postPicUrl = uploaded.secure_url;
    }

    const newProduct = new product({
      ...req.body,
      image: postPicUrl,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (err) {
    console.error("Product Error:", err);
    res
      .status(500)
      .json({ error: "Product creation failed", details: err.message });
  }
}

export const getAllProducts = async (req, res) => {
  console.log(req.body);
  try {
    const products = await product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const addProduct = async (req, res) => {
  console.log(req.body);
  try {
    const Newproduct = new product(req.body);
    await Newproduct.save();
    res.status(201).json(Newproduct);
  } catch (err) {
    res.status(400).json({ error: "Failed to add product" });
  }
};

export const getAllProductsid = async (req, res) => {
  try {
    const id = req.params._id;
    console.log("Requested ID:", id);
    console.log("Product  found");
    

    const singleProduct = await product.findById(id); 

    if (!singleProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(singleProduct);
  } catch (err) {
    console.error("Single Product Error:", err);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
};
