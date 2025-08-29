import React, { useContext, useState, useEffect } from "react";
import { instance } from "../axiosConfig";
import { EcomContext } from "./UseContext";

const Wishlist = () => {
  const { wishlist, setWishlist, fetchWishlist } = useContext(EcomContext);
  const [removingIds, setRemovingIds] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const removeFromWishlist = async (productId) => {
    try {
      setRemovingIds((prev) => [...prev, productId]);

      await instance.delete(`/product/wishList/remove/${productId}`, {
        withCredentials: true,
      });

      setWishlist((prev) => prev.filter((item) => item._id !== productId));
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    } finally {
      setRemovingIds((prev) => prev.filter((id) => id !== productId));
    }
  };

  const uniqueWishlist = wishlist.filter(
    (item, index, self) => index === self.findIndex((t) => t._id === item._id)
  );

  if (uniqueWishlist.length === 0) return <h2>Wishlist is empty</h2>;

  return (
    <div className="wishlist">
      <h2>My Wishlist</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {uniqueWishlist.map((item) => (
          <div
            key={item._id} 
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={item.image || "https://via.placeholder.com/150"}
              alt={item.name || "Product"}
              height={100}
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "4px",
              }}
            />
            <h3>{item.name}</h3>
            <p>₹{item.discountedPrice || item.price || "N/A"}</p>
            <button
              onClick={() => removeFromWishlist(item._id)}
              disabled={removingIds.includes(item._id)}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                backgroundColor: removingIds.includes(item._id)
                  ? "#aaa"
                  : "#f44336",
                color: "#fff",
                border: "none",
                cursor: removingIds.includes(item._id)
                  ? "not-allowed"
                  : "pointer",
                borderRadius: "4px",
              }}
            >
              {removingIds.includes(item._id) ? "Removing..." : "Remove"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
