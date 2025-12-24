import Booking from "../models/bookingModel.js";
import nodemailer from "nodemailer";

// ---------------- CREATE BOOKING (EMAIL FIRST → THEN RESPONSE) ----------------
export const createBooking = async (req, res) => {
  try {
    // 1️⃣ Save booking
    const booking = await Booking.create(req.body);

    // 2️⃣ Create SMTP transporter (RENDER SAFE)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS, // Gmail App Password
      },
    });

    // 3️⃣ Verify transporter (important for debugging)
    await transporter.verify();
    console.log("SMTP READY");

    // 4️⃣ Send admin email
    await transporter.sendMail({
      from: `"Booking Alert" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Booking Submitted",
      html: `
        <h3>New Booking Received</h3>
        <p>A new booking has been submitted.</p>
        <p>Please check the admin panel for details.</p>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY");

    // 5️⃣ Respond to client
    res.status(201).json({
      success: true,
      booking,
    });

  } catch (error) {
    console.error("BOOKING / EMAIL ERROR:", error);
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
