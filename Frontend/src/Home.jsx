
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { instance } from "../axiosConfig";
// import { instance } from "../axiosConfig";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/product/productsdetails");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <div className="product-wrapper">
        <h2 className="product-title">All Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            
            
            <div key={product._id} className="product-card">
              <div className="product-image">
                
               <Link to={`/product/${product._id}`}>
    <img src={product.image} alt={product.name} className="product-image" />
  </Link>
              </div>

      

      
              <div className="product-details">
                <h3>{product.name}</h3>
                <p><strong>Slug:</strong> {product.slug}</p>
                <p><strong>Category:</strong> {product.category}</p>

                <div className="price">
                  <span>Price:</span>
                  <strong>₹{product.originalPrice}</strong>
                </div>

                <div className="discount-price">
                  Discounted Price: ₹{product.discountedPrice}
                </div>

                <p className="description">{product.description}</p>
              </div>
            </div>
          ))}







        </div>
      </div>
    </div>
  );
};

export default Home;

