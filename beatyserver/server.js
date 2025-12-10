import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookCardRoute from "./routes/bookCardRoute.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/book-cards", bookCardRoute);

app.listen(5000, () => console.log("Server running on 5000"));
