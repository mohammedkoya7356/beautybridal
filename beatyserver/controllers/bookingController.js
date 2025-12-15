import Booking from "../models/bookingModel.js";
import nodemailer from "nodemailer";

// ---------------- CREATE BOOKING + SEND EMAIL ----------------
export const createBooking = async (req, res) => {
  try {
    console.log("BOOKING BODY:", req.body);

    // 1️⃣ Save booking
    const booking = await Booking.create(req.body);

    // 2️⃣ Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS,
      },
    });

    // 3️⃣ Email content
    const mailOptions = {
      from: `"Beauty Bridal Booking" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "🛎️ New Booking Received",
      html: `
        <h2>New Booking Alert</h2>
        <p><b>Product:</b> ${booking.productTitle}</p>
        <p><b>Price:</b> ₹${booking.productPrice}</p>
        <p><b>Name:</b> ${booking.name}</p>
        <p><b>Phone:</b> ${booking.phone}</p>
        <p><b>Address:</b> ${booking.address}</p>
        <p><b>Date:</b> ${booking.date}</p>
        <p><b>Booked At:</b> ${new Date(
          booking.createdAt
        ).toLocaleString()}</p>
      `,
    };

    // 4️⃣ Send email
    await transporter.sendMail(mailOptions);

    // 5️⃣ Send success response
    res.status(201).json({
      success: true,
      message: "Booking created and email sent",
      booking,
    });

  } catch (error) {
    console.error("BOOKING ERROR:", error);
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
