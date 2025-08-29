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

