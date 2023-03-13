import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Kalkulator from "./pages/Kalkulator";
import Menu from "./pages/Menu";
import About from "./pages/About";

import Ketenagakerjaan from "./Contents/Ketenagakerjaan";
import Kesehatan from "./Contents/Kesehatan";
import Ktp from "./Contents/Ktp";
import Sim from "./Contents/Sim";
import Skck from "./Contents/Skck";
import Penghasilan from "./Contents/Penghasilan";
import Umkm from "./Contents/Umkm";
import Kendaraan from "./Contents/Kendaraan";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Login Page</h1>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/kalkulator" element={<Kalkulator />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/about" element={<About />}/>

      <Route path="/ketenagakerjaan" element={<Ketenagakerjaan />}/>
      <Route path="/Kesehatan" element={<Kesehatan />}/>
      <Route path="/ktp" element={<Ktp />}/>
      <Route path="/sim" element={<Sim />}/>
      <Route path="/skck" element={<Skck />}/>
      <Route path="/penghasilan" element={<Penghasilan />}/>
      <Route path="/umkm" element={<Umkm />}/>
      <Route path="/kendaraan" element={<Kendaraan />}/>
    </Routes>
  );
}
