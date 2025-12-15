import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookCardRoute from "./routes/bookCardRoute.js";
import bookingRoute from "./routes/bookingRoute.js";


dotenv.config(); // 🔥 Load .env first

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.log("❌ MONGO_URL is missing in .env");
}

mongoose
  .connect(mongoUrl)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/book-cards", bookCardRoute);
app.use("/api/bookings", bookingRoute);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
