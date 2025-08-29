// routes/paymentRoutes.js
import express from "express";
import Stripe from "stripe";
import Product from "../models/Product.js";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Stripe Checkout Session
router.post("/create-checkout-session", authMiddleware, async (req, res) => {
  try {
    const { productId, quantity, address, phone } = req.body;

    // Find the product in DB
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Create Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: product.name },
            unit_amount: Math.round(product.discountedPrice * 100), // Stripe expects amount in paise
          },
          quantity: quantity || 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      metadata: {
        userId: req.user._id.toString(),
        productId,
        quantity,
        address,
        phone,
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error("Stripe session error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Webhook to confirm payment and save order
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET // Set this in your .env
      );
    } catch (err) {
      console.error("Webhook signature verification failed.", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Extract metadata
      const { userId, productId, quantity, address, phone } = session.metadata;

      try {
        const user = await User.findById(userId);
        if (!user) return;

        // Add order to user
        user.orders.push({
          product: productId,
          quantity: Number(quantity),
          address,
          phone,
          paymentMethod: "card",
          status: "Paid",
          orderDate: new Date(),
        });

        await user.save();
        console.log("Order saved successfully for user:", user.email);
      } catch (err) {
        console.error("Error saving order:", err);
      }
    }

    res.json({ received: true });
  }
);

export default router;
