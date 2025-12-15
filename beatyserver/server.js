import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookCardRoute from "./routes/bookCardRoute.js";
import bookingRoute from "./routes/bookingRoute.js";

// Load environment variables FIRST
dotenv.config();

const app = express();

// --------------------
// Middleware
// --------------------
app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

// --------------------
// MongoDB Connection
// --------------------
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("❌ MONGO_URL is missing in .env");
  process.exit(1); // stop server if DB URL missing
}

mongoose
  .connect(mongoUrl)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// --------------------
// Routes
// --------------------
app.use("/api/book-cards", bookCardRoute);
app.use("/api/bookings", bookingRoute);

// Health check route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully");
});

// --------------------
// Server
// --------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
