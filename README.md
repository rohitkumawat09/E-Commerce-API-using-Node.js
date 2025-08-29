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














# 🛒 E-Commerce Project (Node.js + React)

 full-stack **E-Commerce Application** :
- **Backend** → Node.js, Express, MongoDB  
- **Frontend** → React.js  

---

## 🚀 Features
- User Authentication (JWT)
- Product Management (Create, Read, Update, Delete)
- Cart & Wishlist
- Secure REST APIs
- Swagger API Documentation
- Cloudinary Image Upload
- Role-based Access (User/Admin)

---

## 📂 Folder Structure
Backend/
├── config/                # Database & third-party configs
│   ├── db.js              # MongoDB connection
│   ├── cloudinary.js      # Cloudinary config
│   └── stripe.js          # Stripe payment config
│
├── controllers/           # Business logic (APIs handling)
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   ├── wishlistController.js
│   ├── orderController.js
│   └── uploadController.js
│
├── middlewares/           # Custom middlewares
│   ├── authMiddleware.js  # JWT verify middleware
│   └── errorHandler.js    # Global error handler
│
├── models/                # Mongoose models (MongoDB Schema)
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   ├── Wishlist.js
│   └── Order.js
│
├── routes/                # API routes
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   ├── wishlistRoutes.js
│   ├── orderRoutes.js
│   └── uploadRoutes.js
│
├── utils/                 # Helper functions
│   ├── generateToken.js   # JWT token generator
│   └── upload.js          # Multer config for file uploads
│
├── .env                   # Environment variables
├── server.js              # Entry point of backend (Express server)
├── package.json           # Dependencies & scripts
└── README.md              # Backend docs


# Server
PORT=4000
JWT_SECRET=your_jwt_secret_key

# MongoDB
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce

# Frontend URLs
FRONTEND_URL=http://localhost:5173
LOCAL_URL=http://127.0.0.1:5500
DEPLOYED_FRONTEND_URL=https://your-frontend-app.onrender.com
VERCEL_URL=https://your-frontend-app.vercel.app

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key




