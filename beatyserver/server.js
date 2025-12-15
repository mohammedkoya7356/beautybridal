import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookCardRoute from "./routes/bookCardRoute.js";
import bookingRoute from "./routes/bookingRoute.js";

dotenv.config(); // 🔥 Load env first

const app = express();

/* ======================
   🔐 CORS CONFIG (FIX)
   ====================== */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://beautybridaladmincm.netlify.app",
      "https://beautybridal.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

/* ======================
   BODY PARSERS
   ====================== */
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

/* ======================
   MONGODB CONNECTION
   ====================== */
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("❌ MONGO_URL is missing in environment variables");
  process.exit(1);
}

mongoose
  .connect(mongoUrl)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

/* ======================
   ROUTES
   ====================== */
app.use("/api/book-cards", bookCardRoute);
app.use("/api/bookings", bookingRoute);

/* ======================
   HEALTH CHECK
   ====================== */
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

/* ======================
   START SERVER
   ====================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
