import { createContext, useEffect, useState,useContext  } from "react";
import axios from "axios";
import { instance } from "../axiosConfig";
import { AuthContext } from "./AuthContext";


export const EcomContext = createContext();

function UserContext({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

   const { user } = useContext(AuthContext);
  const fetchCart = async () => {
    try {
      const res = await instance.get("/product/cart/data", {
        withCredentials: true,
      });

      const formatted = res.data.cart
        .map((item) => ({
          ...item.product,
          quantity: item.quantity,
          _id: item.product._id,
        }))
        .reduce((acc, curr) => {
          const existing = acc.find((item) => item._id === curr._id);
          if (existing) {
            existing.quantity += curr.quantity;
          } else {
            acc.push(curr);
          }
          return acc;
        }, []);

      setCart(formatted);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  
  const fetchWishlist = async () => {
    try {
      const res = await instance.get("/product/wishlist/data", {
        withCredentials: true,
      });

      const formatted = res.data.wishlist.map((item) => ({
        ...item.product,
        _id: item.product._id,
      }));

      setWishlist(formatted);
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  };

  // useEffect(() => {
  //   fetchCart();
  //   fetchWishlist();
  // }, []);

    useEffect(() => {
    if (user) {
      fetchCart();
      fetchWishlist();
    }
  }, [user]);

  const handleAddToCart = async (product) => {
    if(!user){

    }
    try {
      await instance.post(
        `/product/cart/${product._id}`,
        { quantity: 1 },
        { withCredentials: true }
      );
      fetchCart();
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const handleAddToWishlist = async (product) => {
    try {
      await instance.post(
        `/product/wishlist/${product._id}`,
        {},
        { withCredentials: true }
      );
      fetchWishlist();
    } catch (err) {
      console.error("Error adding to wishlist:", err);
    }
  };

  const increaseQuantity = async (id) => {
    const product = cart.find((item) => item._id === id);
    if (!product || product.quantity >= 10) return;

    try {
      await instance.post(
        `/product/cart/${id}`,
        { quantity: 1 },
        { withCredentials: true }
      );
      fetchCart();
    } catch (err) {
      console.error("Error increasing quantity:", err);
    }
  };

  const decreaseQuantity = async (id) => {
    const product = cart.find((item) => item._id === id);
    if (!product || product.quantity <= 1) return;

    try {
      await instance.post(
        `/product/cart/${id}`,
        { quantity: -1 },
        { withCredentials: true }
      );
      fetchCart();
    } catch (err) {
      console.error("Error decreasing quantity:", err);
    }
  };

  const handleRemoveFromCart = async (id) => {
    try {
      await instance.delete(`/product/cart/${id}`, {
        withCredentials: true,
      });
      fetchCart();
    } catch (err) {
      console.error("Error removing item from cart:", err);
    }
  };

  return (
    <EcomContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleRemoveFromCart,
        increaseQuantity,
        decreaseQuantity,
        fetchCart,
        wishlist,
        setWishlist,
        handleAddToWishlist,
        fetchWishlist,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
}

export default UserContext;
