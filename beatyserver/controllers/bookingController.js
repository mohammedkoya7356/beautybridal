import Booking from "../models/bookingModel.js";

// ---------------- CREATE BOOKING + TELEGRAM NOTIFY ----------------
export const createBooking = async (req, res) => {
  try {
    // 1️⃣ Save booking to DB
    const booking = await Booking.create(req.body);

    // 2️⃣ Respond immediately (FAST UI)
    res.status(201).json({
      success: true,
      booking,
    });

    // 3️⃣ Telegram notification (NON-BLOCKING)
    setImmediate(async () => {
      try {
        await fetch(
          `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: process.env.TELEGRAM_CHAT_ID,
              text: `
📩 NEW BOOKING RECEIVED

👤 Name: ${booking.name}
📞 Phone: ${booking.phone}
📅 Date: ${booking.date}

Check admin panel for full details.
              `,
            }),
          }
        );

        console.log("TELEGRAM NOTIFICATION SENT");
      } catch (err) {
        console.error("TELEGRAM ERROR:", err.message);
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
