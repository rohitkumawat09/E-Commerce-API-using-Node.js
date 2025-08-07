import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String ,},
    category: { type: String ,},
    quantity: { type: Number, default: 0, },
    originalPrice: { type: Number , },
    discountedPrice: { type: Number , },
    attributes: [
      {
        key: { type: String },
        value: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
