import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    productTitle: { type: String, required: true },
    productPrice: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
