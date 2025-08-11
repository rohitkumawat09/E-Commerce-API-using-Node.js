import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EcomContext } from "./UseContext"; 
import { instance } from "../axiosConfig";

const ProductOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, updateCartQuantityAfterOrder, updateQuantityInCart } = useContext(EcomContext);

  const { product, userDetails } = location.state || {};

  if (!product || !userDetails) {
    return <p>No product selected.</p>;
  }

  const cartItem = cart.find(item => item._id === product._id);
  const initialQuantity = cartItem ? cartItem.quantity : 1;

  const [quantity, setQuantity] = useState(initialQuantity);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleQuantityChange = (e) => {
    const val = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(val);
    updateQuantityInCart(product._id, val);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!address || !phone || !paymentMethod) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      await instance.post(
        "/orders/create",
        {
          productId: product._id,
          quantity,
          address,
          phone,
          paymentMethod,
        },
        { withCredentials: true }
      );

      alert("Order placed successfully!");

      updateCartQuantityAfterOrder(product._id, quantity);

      navigate("/");
    } catch (error) {
      console.error("Order placement error:", error);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="product-summary">
        <h3>{product.name}</h3>
        <p className="price">
          ₹{product.discountedPrice}{" "}
          <span className="original-price">₹{product.originalPrice}</span>
        </p>
      </div>

      <div className="user-info">
        <h4>User Details</h4>
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
      </div>

      <form onSubmit={handlePlaceOrder} className="checkout-form">
        <label>
          Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            required
          />
        </label>

        <label>
          Address:
          <textarea
            required
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </label>

        <label>
          Phone:
          <input
            type="tel"
            required
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <div className="payment-method">
          <h4>Select Payment Method</h4>
          <label>
            <input
              type="radio"
              name="payment"
              value="upi"
              required
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="netbanking"
              checked={paymentMethod === "netbanking"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Net Banking
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Cash on Delivery
          </label>
        </div>

        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default ProductOrder;
