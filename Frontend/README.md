# 🛍️ E-Commerce Frontend (React + Vite)

This is the **Frontend Part** of the project, built using React and Vite.  
It connects with Backend APIs built on Node.js + Express + MongoDB.  

---

## 🚀 Features
- User Authentication (Login/Register with JWT)
- Product Listing with Images & Details
- Add to Cart / Remove from Cart
- Wishlist Management
- Order Placement & Tracking Pages
- Protected Routes (User/Admin)
- Responsive UI with React Components
- Context API for State Management
- Axios Integration with Backend
- Success / Cancel Payment Pages (Dummy Flow)

---

## 📂 Folder Structure (Frontend)

Frontend/
│── dist/                        # Production build files (auto-generated)  
│── node_modules/                # Installed dependencies  
│── public/                      # Public assets (favicon, static images, etc.)  
│── src/  
│   │── assets/                  # Images, icons and other assets  
│   │── components/              # Reusable UI components  
│   │── App.css                  # Global styles for App  
│   │── App.jsx                  # Root component with routes  
│   │── AuthContext.jsx          # Context API for Authentication  
│   │── cart.jsx                 # Cart Page  
│   │── first.jsx                # First/Landing Page  
│   │── Footer.jsx               # Footer Component  
│   │── Header.jsx               # Header / Navbar Component  
│   │── Home.jsx                 # Home Page  
│   │── index.css                # Global CSS  
│   │── main.jsx                 # Entry Point (ReactDOM render)  
│   │── ProtectedRoute.jsx       # Higher-order component for Protected Routes  
│   │── SingleProduct.jsx        # Single Product Details Page  
│   │── UseContext.jsx           # Custom Context Hook  
│   │── UserProvider.jsx         # User Context Provider  
│   │── wishlist.jsx             # Wishlist Page  
│── .env                         # Environment variables (VITE_API_URL, etc.)  
│── .gitignore                   # Git ignored files  
│── axiosConfig.js               # Axios configuration for API calls  
│── eslint.config.js             # ESLint configuration  
│── index.html                   # Main HTML template  
│── package.json                 # Project dependencies & scripts  
│── vite.config.js               # Vite configuration  
