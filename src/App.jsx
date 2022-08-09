import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;