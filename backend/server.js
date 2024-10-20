// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { connectDB } from "./config/db.js";
// import Product from "../models/Product.js";
// import productRoutes from "./Routes/product.route.js";

// dotenv.config();
// const app = express();

// app.use(express.json());

// app.use("/api/products", productRoutes);

// app.listen(5000, () => {
//   connectDB();
//   console.log("Server started at http://localhost:5000");
// });

import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import the CORS middleware
import { connectDB } from "./config/db.js";
import productRoutes from "./Routes/product.route.js";

dotenv.config();

const app = express();

// Enable CORS for all requests
app.use(cors());

app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
});
