import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import userRouter from "./routes/userRoutes.js";
import product from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

import swaggerSpec from "./swagger.js";
import swaggerUi from "swagger-ui-express";

dotenv.config();
const app = express();
const port = process.env.PORT;

console.log("DEPLOYED_FRONTEND_URL:", process.env.DEPLOYED_FRONTEND_URL);

connectDB();

const allowedOrigins = [
  process.env.DEPLOYED_FRONTEND_URL,
   process.env.FRONTEND_URL,
  process.env.LOCAL_URL,
  process.env.VERCEL_URL,
  "https://mern-ecommerce-typescript.vercel.app",
"https://e-commerce-api-using-node-js-1.onrender.com",
   "http://localhost:5173",
  "http://localhost:4000",
  "http://127.0.0.1:5500", 
];

const localhostRegex = /^(https:\/\/localhost:\d+|http:\/\/localhost:\d+)$/;

const corsOptions = {
  origin: function (origin, callback) {
    console.log("origin", origin);
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      localhostRegex.test(origin)
    ) {
      return callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true, 
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/user", userRouter);
app.use("/product", product);

app.use("/orders", orderRoutes);

app.use("/payment", paymentRoutes);
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
