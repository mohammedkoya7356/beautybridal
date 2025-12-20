import Booking from "../models/bookingModel.js";
import nodemailer from "nodemailer";

// ---------------- CREATE BOOKING (RESPOND FIRST → EMAIL LATER) ----------------
export const createBooking = async (req, res) => {
  try {
    // 1️⃣ Save booking
    const booking = await Booking.create(req.body);

    // 2️⃣ Respond immediately (FAST)
    res.status(201).json({
      success: true,
      booking,
    });

    // 3️⃣ Send SIMPLE admin email (NON-BLOCKING)
    setImmediate(async () => {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.ADMIN_EMAIL,
            pass: process.env.ADMIN_EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Booking Alert" <${process.env.ADMIN_EMAIL}>`,
          to: process.env.ADMIN_EMAIL,
          subject: "📩 New Booking Submitted",
          text: "A new booking has been submitted. Please check the admin panel.",
        });

      } catch (emailError) {
        console.error("EMAIL ERROR:", emailError.message);
      }
    });

  } catch (error) {
    console.error("BOOKING ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- DELETE BOOKING ----------------
export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------------- ADMIN FETCH BOOKINGS ----------------
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching bookings",
      error: error.message,
    });
  }
};
