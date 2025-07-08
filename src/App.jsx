import React from 'react'
import LandingPage from './components/LandingPage'
import Gallery from './components/Gallery'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  )
}

export default App
