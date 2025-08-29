import User from "../models/User.js";
import Product from "../models/Product.js";

export const createOrder = async (req, res) => {
  try {
    const { productId, quantity, address, phone, paymentMethod } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const user = await User.findById(req.user._id);

    user.orders.push({
      product: productId,
      quantity,
      address,
      phone,
      paymentMethod,
      status: "Pending",
    });

    await user.save();

    res.status(201).json({ message: "Order placed successfully", orders: user.orders });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
};




export const getMyOrders = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate(
      "orders.product",
     "name discountedPrice originalPrice image"
    );
    res.json(user.orders);
  } catch (error) {
    console.error("Error fetching my orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};



export const getAllOrders = async (req, res) => {
  try {
    const users = await User.find({ "orders.0": { $exists: true } })
      .populate("orders.product", "name discountedPrice originalPrice image") 
      .select("name email orders");

    res.json(users);
  } catch (error) {
    console.error("Error fetching all orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};
