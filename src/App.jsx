import './App.css'
import HeadingSection from './components/HeadingSection'
import Nav from './components/Nav'
import ShopNow from './components/Shopnow'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThankYou from './components/Thankyou'
import BookingPage from './components/BookingPage'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      {/* Navbar always on top */}
      <Nav />

      {/* Hero / Heading Section */}
      <HeadingSection />

      <Routes>
        <Route path="/" element={<ShopNow />} />

        <Route path="/book" element={<BookingPage />} />

        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>

      {/* Map before footer */}
      <MapSection />

      {/* Footer stays at very bottom */}
      <Footer />
    </Router>
  )
}

export default App
