import express from "express";
import { adminLogin, adminRegister } from "../controllers/adminController.js";

const router = express.Router();

// Register admin (use only ONCE)
router.post("/register", adminRegister);

// Login
router.post("/login", adminLogin);

export default router;
