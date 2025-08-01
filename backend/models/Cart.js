import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
