import { useLocation, useNavigate } from "react-router-dom";

const ProductOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { product, userDetails } = location.state || {};

  if (!product || !userDetails) {
    return <p>No product selected.</p>;
  }

  const handlePlaceOrder = () => {
    alert(`Order placed for ${product.name}! Payment method selected.`);
    navigate("/"); 
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* Product Details */}
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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePlaceOrder();
        }}
        className="checkout-form"
      >
        <label>
          Address:
          <textarea required placeholder="Enter your delivery address"></textarea>
        </label>

        <label>
          Phone:
          <input type="tel" required placeholder="Enter phone number" />
        </label>

        {/* Payment Method */}
        <div className="payment-method">
          <h4>Select Payment Method</h4>
          <label>
            <input type="radio" name="payment" value="upi" required /> UPI
          </label>
          <label>
            <input type="radio" name="payment" value="netbanking" /> Net Banking
          </label>
          <label>
            <input type="radio" name="payment" value="cod" /> Cash on Delivery
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
