import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// pages
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import Hotels from "./pages/Hotels";
import Offers from "./pages/Offers";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content grows */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Destinations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/hotel" element={<Hotels />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
