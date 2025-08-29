# 🛒 E-Commerce Project (Node.js + React)

Full-stack **E-Commerce Application**:  
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
- 🔹 Responsive Design for Mobile & Desktop  
- 🔹 JWT Token Expiration Handling  
- 🔹 Input Validation & Error Handling  
- 🔹 Admin Dashboard for Product Management  

---

## 📂 Backend Folder Structure
Backend/
├── config/ # Database & third-party configs
│ ├── db.js # MongoDB connection 🔹 Important for DB setup
│ ├── cloudinary.js # Cloudinary config 🔹 For image uploads
│ └── stripe.js # Stripe payment config 🔹 For payment integration
├── controllers/ # Business logic (APIs handling)
│ ├── authController.js 🔹 Handles login/register
│ ├── productController.js 🔹 CRUD for products
│ ├── cartController.js 🔹 Cart API logic
│ ├── wishlistController.js 🔹 Wishlist API logic
│ ├── orderController.js 🔹 Order API logic
│ └── uploadController.js 🔹 File uploads
├── middlewares/ # Custom middlewares
│ ├── authMiddleware.js # JWT verify middleware 🔹 Protect routes
│ └── errorHandler.js # Global error handler 🔹 Handles API errors
├── models/ # Mongoose models (MongoDB Schema)
│ ├── User.js 🔹 User schema
│ ├── Product.js 🔹 Product schema
│ ├── Cart.js 🔹 Cart schema
│ ├── Wishlist.js 🔹 Wishlist schema
│ └── Order.js 🔹 Order schema
├── routes/ # API routes
│ ├── authRoutes.js 🔹 Auth APIs
│ ├── productRoutes.js 🔹 Product APIs
│ ├── cartRoutes.js 🔹 Cart APIs
│ ├── wishlistRoutes.js 🔹 Wishlist APIs
│ ├── orderRoutes.js 🔹 Order APIs
│ └── uploadRoutes.js 🔹 File upload APIs
├── utils/ # Helper functions
│ ├── generateToken.js 🔹 JWT token generator
│ └── upload.js 🔹 Multer config for file uploads
├── .env # Environment variables 🔹 DB, Cloudinary, Stripe keys
├── server.js # Entry point of backend (Express server)
├── package.json # Dependencies & scripts
└── README.md # Backend docs


- 🔹 MongoDB Atlas Connection  
- 🔹 Cloudinary Image Upload Setup  
- 🔹 Stripe Payment Configuration  

---

## Server Configuration

- 🔹 **PORT** = 4000  # Backend server port
- 🔹 **JWT_SECRET** = your_jwt_secret_key  # Secret key for JWT authentication

### MongoDB
- 🔹 **MONGO_URI** = mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce  # MongoDB Atlas connection string

### Frontend URLs
- 🔹 **FRONTEND_URL** = http://localhost:5173  # Local frontend dev URL
- 🔹 **LOCAL_URL** = http://127.0.0.1:5500    # Alternative local URL
- 🔹 **DEPLOYED_FRONTEND_URL** = https://your-frontend-app.onrender.com  # Deployed frontend URL
- 🔹 **VERCEL_URL** = https://your-frontend-app.vercel.app  # Vercel deployment URL

### Cloudinary
- 🔹 **CLOUDINARY_CLOUD_NAME** = your_cloud_name  # Cloudinary account cloud name
- 🔹 **CLOUDINARY_API_KEY** = your_api_key        # Cloudinary API key
- 🔹 **CLOUDINARY_API_SECRET** = your_api_secret  # Cloudinary API secret

### Stripe
- 🔹 **STRIPE_SECRET_KEY** = your_stripe_secret_key  # Stripe secret key for payments
- 🔹 **STRIPE_PUBLISHABLE_KEY** = your_stripe_publishable_key  # Stripe publishable key



---

## 🛍️ Frontend (React + Vite)

- Built using React and Vite  
- Connects with Backend APIs (Node.js + Express + MongoDB)  

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
- 🔹 Product Filtering & Sorting  
- 🔹 Search Functionality  
- 🔹 Loading Skeletons for Better UX  
- 🔹 Toast Notifications for Actions  

---

## 📂 Frontend Folder Structure


Frontend/
│── dist/ # Production build files 🔹 Ready for deployment
│── node_modules/ # Installed dependencies 🔹 Auto-generated
│── public/ # Public assets 🔹 favicon, static images
│── src/
│ │── assets/ # Images, icons and other assets
│ │── components/ # Reusable UI components 🔹 Header, Footer, etc.
│ │── App.css # Global styles for App
│ │── App.jsx # Root component with routes
│ │── AuthContext.jsx # Context API for Authentication 🔹 Provides auth state
│ │── cart.jsx # Cart Page
│ │── first.jsx # First/Landing Page
│ │── Footer.jsx # Footer Component
│ │── Header.jsx # Header / Navbar Component
│ │── Home.jsx # Home Page
│ │── index.css # Global CSS
│ │── main.jsx # Entry Point (ReactDOM render)
│ │── ProtectedRoute.jsx # Higher-order component for Protected Routes 🔹 Protect pages
│ │── SingleProduct.jsx # Single Product Details Page
│ │── UseContext.jsx # Custom Context Hook 🔹 Helper for context
│ │── UserProvider.jsx # User Context Provider
│ │── wishlist.jsx # Wishlist Page
│── .env # Environment variables 🔹 API URLs
│── .gitignore # Git ignored files
│── axiosConfig.js # Axios configuration for API calls 🔹 Base URL, interceptors
│── eslint.config.js # ESLint configuration
│── index.html # Main HTML template
│── package.json # Project dependencies & scripts
│── vite.config.js # Vite configuration


- 🔹 Vite Optimized Build  
- 🔹 React Router for Navigation  
- 🔹 Context API for Global State  
- 🔹 Axios Instance with Interceptors  
- 🔹 Environment Variables for API URLs  


