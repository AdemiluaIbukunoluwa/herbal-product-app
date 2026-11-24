import { useState } from 'react'
import './App.css'
import Navigation from './components/nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductBuilder from './pages/ProductBuilder'
import CartPage from './pages/CartPage'
import ProductPage from './pages/productInfoPage'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-builder" element={<ProductBuilder />} />
      </Routes>
    </>
  )
}

export default App
