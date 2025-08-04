import React, { useEffect, useState } from "react";
import axios from "axios";
import { instance } from "../axiosConfig";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const fetchWishlist = async () => {
    try {
      const res = await instance.get("/product/wishlist/Data", {
        withCredentials: true,
      });
      setWishlist(res.data.wishlist || []);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      await instance.delete(`/product/wishList/remove/${productId}`, {
        withCredentials: true,
      });
      setWishlist((prev) => prev.filter((item) => item.product._id !== productId));
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  if (wishlist.length === 0) return <h2>Wishlist is empty</h2>;

  return (
    <div className="wishlist">
      <h2>My Wishlist</h2>
      <div className="wishlist-items" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {wishlist.map((item) => (
          <div
            key={item.product._id}
            className="wishlist-card"
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={item.product.image || "https://via.placeholder.com/150"}
              alt={item.product.name || "Product"}
              height={100}
              style={{ objectFit: "cover", width: "100%", borderRadius: "4px" }}
            />
            <h3>{item.product.name || "Unnamed Product"}</h3>
            <p>₹{item.product.discountedPrice || item.product.price || "N/A"}</p>
            <button
              onClick={() => removeFromWishlist(item.product._id)}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
