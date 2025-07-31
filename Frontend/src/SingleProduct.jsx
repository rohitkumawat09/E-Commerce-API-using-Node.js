// import React from 'react'

//  const SingleProduct = () => {
//   return (
//     <div>singelproduct</div>
//   )
// }

// export default SingleProduct



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div className="single-product">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: "300px" }} />
      <p><strong>Slug:</strong> {product.slug}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Original Price:</strong> ₹{product.originalPrice}</p>
      <p><strong>Discounted Price:</strong> ₹{product.discountedPrice}</p>
    </div>
  );
};

export default SingleProduct;
