import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./Router";
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <div className=" bg-slate-200">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}
export default App;
