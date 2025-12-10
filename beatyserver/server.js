import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes
import adminRoute from "./routes/adminRoute.js";
import bookCardRoute from "./routes/bookCardRoute.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));

// Routes
app.use("/api/admin", adminRoute);        // 🔥 Admin login/register routes
app.use("/api/book-cards", bookCardRoute); // 🔥 Other backend routes

// Default Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Server Listen (Render compatible)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
