import React, { useEffect, useState, useContext } from "react";
import { instance } from "../axiosConfig";
import { AuthContext } from "./AuthContext"; 
import { useNavigate } from "react-router-dom";

const GetMyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await instance.get("/orders/my-orders", {
          withCredentials: true,
        });
        
        setOrders(res.data.orders || res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setError("Failed to fetch orders.");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, navigate]);

  if (loading) return <p>Loading your orders...</p>;
  if (error) return <p>{error}</p>;
  if (orders.length === 0) return <p>No orders found.</p>;

 return (
  <div>
    <h2>My Orders</h2>
    <ul>
      {orders.map((order) => (
        <li key={order._id} style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "10px", display: "flex", alignItems: "center", gap: "1rem" }}>
          {order.product?.image ? (
            <img 
              src={order.product.image} 
              alt={order.product.name} 
              style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }} 
            />
          ) : (
            <div style={{ width: "100px", height: "100px", backgroundColor: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
              No Image
            </div>
          )}

          <div>
            <p><strong>Product:</strong> {order.product?.name || "Product name not available"}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Order Date:</strong> {order.orderDate ? new Date(order.orderDate).toLocaleString() : "N/A"}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

};

export default GetMyOrders;
