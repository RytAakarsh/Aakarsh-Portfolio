import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Hero />} />
              </Routes>
          </Router>
    </>
  )
}
  

export default App
