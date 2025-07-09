import React from 'react'
import LandingPage from './components/LandingPage'
import Gallery from './components/Gallery'
import Login from './components/Login'
import Register from './components/Register'
import Hostelform from './components/Hostelform'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/hostelform" element={<Hostelform />} />
    </Routes>
  )
}

export default App
