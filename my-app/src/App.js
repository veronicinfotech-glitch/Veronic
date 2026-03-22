import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesSection from './components/Services'; // Your services component
import Home from "./components/Home";
import About from "./components/About";
import ProductPage from './components/Product';
import Contact from "./components/Contact";
import Packages  from "./components/Packages";
import BookDemo from "./components/BookDemo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesSection />} /> {/* Add this line */}
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/book-demo" element={<BookDemo />} />

      </Routes>
    </Router>
  );
}

export default App;