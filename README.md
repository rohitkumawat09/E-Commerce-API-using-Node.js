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
1. ├── config/                # Database & third-party configs
   - 1.1 ├── db.js 🔹 Important for DB setup
   - 1.2 ├── cloudinary.js 🔹 For image uploads
   - 1.3 └── stripe.js 🔹 For payment integration
2. ├── controllers/           # Business logic (APIs handling)
   - 2.1 ├── authController.js 🔹 Handles login/register
   - 2.2 ├── productController.js 🔹 CRUD for products
   - 2.3 ├── cartController.js 🔹 Cart API logic
   - 2.4 ├── wishlistController.js 🔹 Wishlist API logic
   - 2.5 ├── orderController.js 🔹 Order API logic
   - 2.6 └── uploadController.js 🔹 File uploads
3. ├── middlewares/           # Custom middlewares
   - 3.1 ├── authMiddleware.js 🔹 JWT verify middleware, Protect routes
   - 3.2 └── errorHandler.js 🔹 Global error handler
4. ├── models/                # Mongoose models (MongoDB Schema)
   - 4.1 ├── User.js 🔹 User schema
   - 4.2 ├── Product.js 🔹 Product schema
   - 4.3 ├── Cart.js 🔹 Cart schema
   - 4.4 ├── Wishlist.js 🔹 Wishlist schema
   - 4.5 └── Order.js 🔹 Order schema
5. ├── routes/                # API routes
   - 5.1 ├── authRoutes.js 🔹 Auth APIs
   - 5.2 ├── productRoutes.js 🔹 Product APIs
   - 5.3 ├── cartRoutes.js 🔹 Cart APIs
   - 5.4 ├── wishlistRoutes.js 🔹 Wishlist APIs
   - 5.5 ├── orderRoutes.js 🔹 Order APIs
   - 5.6 └── uploadRoutes.js 🔹 File upload APIs
6. ├── utils/                 # Helper functions
   - 6.1 ├── generateToken.js 🔹 JWT token generator
   - 6.2 └── upload.js 🔹 Multer config for file uploads
7. ├── .env 🔹 Environment variables (DB, Cloudinary, Stripe keys)
8. ├── server.js 🔹 Entry point of backend (Express server)
9. ├── package.json 🔹 Dependencies & scripts
10. └── README.md 🔹 Backend docs


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
1. ├── dist/ 🔹 Production build files, ready for deployment
2. ├── node_modules/ 🔹 Installed dependencies, auto-generated
3. ├── public/ 🔹 Public assets (favicon, static images)
4. ├── src/
   - 4.1 ├── assets/ 🔹 Images, icons, and other assets
   - 4.2 ├── components/ 🔹 Reusable UI components (Header, Footer, etc.)
   - 4.3 ├── App.css 🔹 Global styles for App
   - 4.4 ├── App.jsx 🔹 Root component with routes
   - 4.5 ├── AuthContext.jsx 🔹 Context API for Authentication, provides auth state
   - 4.6 ├── cart.jsx 🔹 Cart Page
   - 4.7 ├── first.jsx 🔹 First/Landing Page
   - 4.8 ├── Footer.jsx 🔹 Footer Component
   - 4.9 ├── Header.jsx 🔹 Header / Navbar Component
   - 4.10 ├── Home.jsx 🔹 Home Page
   - 4.11 ├── index.css 🔹 Global CSS
   - 4.12 ├── main.jsx 🔹 Entry Point (ReactDOM render)
   - 4.13 ├── ProtectedRoute.jsx 🔹 Higher-order component to protect routes/pages
   - 4.14 ├── SingleProduct.jsx 🔹 Single Product Details Page
   - 4.15 ├── UseContext.jsx 🔹 Custom Context Hook, helper for context
   - 4.16 ├── UserProvider.jsx 🔹 User Context Provider
   - 4.17 └── wishlist.jsx 🔹 Wishlist Page
5. ├── .env 🔹 Environment variables (API URLs, etc.)
6. ├── .gitignore 🔹 Git ignored files
7. ├── axiosConfig.js 🔹 Axios configuration (Base URL, interceptors)
8. ├── eslint.config.js 🔹 ESLint configuration
9. ├── index.html 🔹 Main HTML template
10. ├── package.json 🔹 Project dependencies & scripts
11. └── vite.config.js 🔹 Vite configuration



- 🔹 Vite Optimized Build  
- 🔹 React Router for Navigation  
- 🔹 Context API for Global State  
- 🔹 Axios Instance with Interceptors  
- 🔹 Environment Variables for API URLs  


