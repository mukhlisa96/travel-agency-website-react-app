import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import Products from "./components/pages/Products"
import SignUp from "./components/pages/SignUp"
import Services from "./components/pages/Services"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
