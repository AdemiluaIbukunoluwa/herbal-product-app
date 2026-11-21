import { useState } from 'react'
import './App.css'
import Navigation from './components/nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/productInfoPage'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
