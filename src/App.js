import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './pages/components/Header';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Footer from './pages/components/Footer';

function App() {
  return (
    <>
      < Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
