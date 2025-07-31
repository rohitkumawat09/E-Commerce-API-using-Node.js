// import express from "express";

// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import userRouter from "./routes/userRoutes.js";
// import product from "./routes/productRoutes.js";
// import cartRouter from "./routes/cartRoutes.js";

// const app = express();

// const port = process.env.PORT;

// connectDB();

// const corsOptions = {
//   origin: process.env.FRONTEND_URL,
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
// };
// app.use(cors(corsOptions));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/user", userRouter);
// app.use("/cart", cartRouter);
// app.use("/product", product);
// // app.use("/uploads", express.static("uploads"));

// app.listen(port, () => console.log(`Server started at port ${port}`));



import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import userRouter from "./routes/userRoutes.js";
import product from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

connectDB();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/product", product);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
