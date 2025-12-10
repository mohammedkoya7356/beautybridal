import express from "express";
import multer from "multer";
import {
  getBookCards,
  createBookCard,
  updateBookCard,
  deleteBookCard,
} from "../controllers/bookCardController.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", getBookCards);
router.post("/", upload.single("image"), createBookCard);
router.put("/:id", upload.single("image"), updateBookCard);
router.delete("/:id", deleteBookCard);

export default router;
