import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Product from "./Components/Product";
import Add from "./Components/Add";
import Update from "./Components/Update";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Product />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;