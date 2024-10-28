// src/Router.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Pages/Shop";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default AppRouter;
