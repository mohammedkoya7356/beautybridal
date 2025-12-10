import BookCard from "../models/bookCardModel.js";
import { uploadToCloudinary } from "./uploadCloudinary.js";


// ---------------- GET ALL ----------------
export const getBookCards = async (req, res) => {
  try {
    const cards = await BookCard.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ---------------- CREATE ----------------
export const createBookCard = async (req, res) => {
  try {
    const imageUrl = await uploadToCloudinary(req.file.buffer);

    const newCard = new BookCard({
      title: req.body.title,
      price: req.body.price,
      image: imageUrl,
    });

    await newCard.save();
    res.json(newCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ---------------- UPDATE ----------------
export const updateBookCard = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      price: req.body.price,
    };

    if (req.file) {
      const imageUrl = await uploadToCloudinary(req.file.buffer);
      updateData.image = imageUrl;
    }

    const updated = await BookCard.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ---------------- DELETE ----------------
export const deleteBookCard = async (req, res) => {
  try {
    await BookCard.findByIdAndDelete(req.params.id);
    res.json({ message: "Card deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
