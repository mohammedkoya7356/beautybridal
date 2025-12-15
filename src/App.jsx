import "./App.css";

import HeadingSection from "./components/HeadingSection";
import Nav from "./components/Nav";
import ShopNow from "./components/ShopNow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYou from "./components/ThankYou";
import BookingPage from "./components/BookingPage";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      {/* Navbar always on top */}
      <Nav />

      {/* HOME */}
      <section id="home">
        <HeadingSection />
      </section>

      {/* ROUTED CONTENT */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* BOOKINGS */}
              <section id="bookings">
                <ShopNow />
              </section>

              {/* OUR SHOP */}
              <section id="shop">
                <MapSection />
              </section>
            </>
          }
        />

        <Route path="/book" element={<BookingPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>

      {/* CONTACT */}
      <footer id="contact">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
