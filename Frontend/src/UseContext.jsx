import { createContext, useEffect, useState } from "react";

export const EcomContext = createContext();

function UserContext({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleAddToCart(product) {
    if (productAlreadyExists(product._id)) {
      setCart(
        cart.map((cartItem) =>
          cartItem._id === product._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }


  function productAlreadyExists(id) {
    return cart.some((cartItem) => cartItem._id === id);
  }

  return (
    <EcomContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
     
      }}
    >
      {children}
    </EcomContext.Provider>
  );
}

export default UserContext;
