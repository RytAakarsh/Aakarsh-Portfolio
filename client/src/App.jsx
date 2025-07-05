import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="cursor-none">
      <CustomCursor />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App