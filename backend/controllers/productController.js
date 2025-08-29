import product from "../models/Product.js";
import cloudinary from "../config/cloudinary.js"
import User from "../models/User.js";

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
  try {
    let postPicUrl = "";

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
    res.status(500).json({
      error: "Product creation failed",
      details: err.message,
    });
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




export async function CartData(req, res) {
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    const quantity = req.body.quantity || 1;

    const selectedProduct = await product.findById(productId);
    if (!selectedProduct)
      return res.status(404).json({ error: "Product not found" });

    const user = await User.findById(userId);

    const existingItem = user.cart.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity = quantity;
    } else {
      user.cart.push({ product: productId, quantity });
    }

    await user.save();

    res.status(200).json({ message: "Cart updated successfully", cart: user.cart });
  } catch (error) {
    res.status(500).json({ error: "Cart update failed", details: error.message });
  }
}


export async function getCartData(req, res) {
   try {
    const userId = req.user._id;

    const user = await User.findById(userId).populate("cart.product");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ cart: user.cart });
  } catch (error) {
    console.error("Cart fetch error:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}




export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user._id; // ✅ Corrected here
    const productId = req.params.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.cart = user.cart.filter(item => item.product.toString() !== productId);
    await user.save();

    res.json({ message: "Product removed from cart" });
  } catch (err) {
    console.error("Error removing from cart:", err);
    res.status(500).json({ message: "Error removing from cart", error: err.message });
  }
};


export async function wishlist(req, res) {
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    console.log(userId , "hello" , productId)

    const productData = await product.findById(productId);  // ✅ Use imported model
    if (!productData) {
      return res.status(404).json({ error: "Product not found" });
    }

    const user = await User.findById(userId).populate("wishlist.product");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const alreadyInWishlist = user.wishlist.some(
      (item) => item.product && item.product._id.toString() === productId
    );

    if (alreadyInWishlist) {
      return res.status(200).json({
        message: "Product already in wishlist",
        wishlist: user.wishlist,
      });
    }

    user.wishlist.push({ product: productId });
    await user.save();

    res.status(200).json({
      message: "Product added to wishlist",
      wishlist: user.wishlist,
    });
  } catch (error) {
    console.error("Error updating wishlist:", error);
    res.status(500).json({
      error: "Error updating wishlist",
      details: error.message,
    });
  }
}






// export async function getWishlistData(req, res) {
//   try {
//     const userId = req.user._id;

//     const user = await User.findById(userId).populate("wishlist.product");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ wishlist: user.wishlist });
//   } catch (error) {
//     console.error("Error fetching wishlist:", error);
//     res.status(500).json({ message: "Server error while fetching wishlist" });
//   }
// }


export async function getWishlistData(req, res) {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).populate("wishlist.product");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Duplicate remove logic
    const uniqueWishlist = [];
    const seen = new Set();

    user.wishlist.forEach(item => {
      const productId = item.product?._id?.toString();
      if (productId && !seen.has(productId)) {
        seen.add(productId);
        uniqueWishlist.push(item);
      }
    });

    res.status(200).json({ wishlist: uniqueWishlist });
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    res.status(500).json({ message: "Server error while fetching wishlist" });
  }
}




export async function wishListRemoveData(req,res) {
  try {
        const userId = req.user._id;
    const productId = req.params.id;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { wishlist: { product: productId } } },
      { new: true }
    ).populate("wishlist.product");
       return res.status(200).json({
      message: "Product removed from wishlist",
      wishlist: updatedUser.wishlist,
    });
  } catch (error) {
      console.error("Error removing product from cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
  
}


export async function updateProduct(req, res) {
  try {
    const productId = req.params.id;
    const updateData = { ...req.body };

    if (req.file) {
      const uploaded = await uploadToCloudinary(req.file.buffer, "post_pics");
      updateData.image = uploaded.secure_url;
    }

    const updatedProduct = await product.findByIdAndUpdate(
      productId,
      { $set: updateData },
      { new: true }
    );

    console.log("Updated Product:", updatedProduct);
    console.log("Updated Product:", updatedProduct);
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({
      error: "Product update failed",
      details: err.message,
    });
  }
}



export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deleted = await product.findByIdAndDelete(productId); // lowercase 'product'
    if (!deleted) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};



