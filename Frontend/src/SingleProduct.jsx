import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EcomContext } from "./UseContext.jsx";
import { useNavigate } from "react-router-dom";
const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { handleAddToCart, cart } = useContext(EcomContext);
const navigate=useNavigate()
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/product/productsdetails/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching single product:", error);
      }
    };

    fetchSingleProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const isInCart = cart.some((item) => item._id === product._id);

  // const handleAdd = () => {
  //   if (!isInCart) {
  //     handleAddToCart(product);
  //   }
  // };,
  
  const handleAdd = async () => {
    if (!isInCart) {
     
      handleAddToCart(product);

    
      try {
        const response = await axios.post(
          "http://localhost:4000/cart/postaddToCart",
          {
            productId: product._id,
            quantity: 1,
          },
      
        );

        console.log(" Product added to backend cart:", response.data);
        navigate("/cart"); 
      } catch (error) {
        console.error(" Error adding to backend cart:", error);
      }
    }
  };


  return (
    <div className="single-product">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: "300px" }} />
      <p><strong>Slug:</strong> {product.slug}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Original Price:</strong> ₹{product.originalPrice}</p>
      <p><strong>Discounted Price:</strong> ₹{product.discountedPrice}</p>

      <button
        onClick={handleAdd}
        disabled={isInCart}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: isInCart ? "#ccc" : "#28a745",
          color: isInCart ? "#666" : "#fff",
          border: "none",
          cursor: isInCart ? "not-allowed" : "pointer",
        }}
      >
        {isInCart ? "Already in Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default SingleProduct;
