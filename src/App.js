import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Sidebar from './components/sidebar';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <div style={{ marginLeft: isOpen ? 200 : 60, padding: 20, flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}
