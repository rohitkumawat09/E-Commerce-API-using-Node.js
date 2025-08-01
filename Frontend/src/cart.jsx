import React, { useContext, useEffect } from "react";
import { EcomContext } from "./UseContext";
import axios from "axios";

function Cart() {
  const { cart, setCart } = useContext(EcomContext);

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await axios.get("https://e-commerce-api-using-node-js.onrender.com/cart/getaddToCart");
        console.log("response:", response.data);

        const formattedCart = response.data.items.map((item) => ({
          ...item.productId,             
          quantity: item.quantity,  
          originalPrice:item.originalPrice,   
          discountedPrice:item.discountedPrice,
          _id: item._id,                
        }));

        setCart(formattedCart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    }

    fetchCart();
  }, [setCart]);

  
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item._id}>
              <div className="cart_img">
                <img src={item.image } alt="" />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.originalPrice}</p>
                <p>Price: ₹{item.discountedPrice}</p>

                <div className="quantity-controls">
                  <p>Quantity: {item.quantity}</p>
                
                </div>

                <p><strong>Total: ₹{item.discountedPrice * item.quantity}</strong></p>
              </div>
            </div>
          ))}

          <div className="total-amount">
            <h3>Total Amount: ₹{totalAmount}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
