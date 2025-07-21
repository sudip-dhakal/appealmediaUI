import React from "react";
import OurProducts from "./Components/OurProducts";
import About from "./Components/About";
import NewsAndEvents from "./Components/NewsAndEvents";
import Gallery from "./Components/Gallery";
import ContactUs from "./Components/ContactUs";
import Products from "./Components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hompage from "./Components/Hompage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/newsAndEvents" element={<NewsAndEvents />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

<OurProducts />;
