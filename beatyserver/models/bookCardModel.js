import mongoose from "mongoose";

const bookCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("BookCard", bookCardSchema);
