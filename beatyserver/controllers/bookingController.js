import Booking from "../models/bookingModel.js";
import nodemailer from "nodemailer";

// ---------------- CREATE BOOKING (EMAIL NOTIFICATION) ----------------
export const createBooking = async (req, res) => {
  try {
    // 1️⃣ Save booking
    const booking = await Booking.create(req.body);

    // 2️⃣ SMTP transporter (Gmail)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.ADMIN_EMAIL,       // sender
        pass: process.env.ADMIN_EMAIL_PASS,  // Gmail App Password
      },
    });

    // 3️⃣ Send email to ADMIN NOTIFICATION EMAIL
    await transporter.sendMail({
      from: `"Booking Alert" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.NOTIFY_EMAIL, // 👈 DIFFERENT EMAIL
      subject: "🛎️ New Booking Submitted",
      html: `
        <h3>New Booking Received</h3>
        <p><b>Name:</b> ${booking.name || "N/A"}</p>
        <p><b>Phone:</b> ${booking.phone || "N/A"}</p>
        <p><b>Date:</b> ${booking.date || "N/A"}</p>
        <p>Please check the admin panel for full details.</p>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY");

    // 4️⃣ Respond to client
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
