import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Kalkulator from "./pages/Kalkulator";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Content from "./pages/Content";

export default function App() {
  return (
    <Routes>
      <Route path="/navbar" element={<Navbar />}/>
      <Route path="/footer" element={<Footer />}/>
      <Route path="/cards" element={<Cards />}/>
      <Route path="/" element={<h1>Login Page</h1>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/kalkulator" element={<Kalkulator />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/content" element={<Content />}/>
    </Routes>
  );
}
