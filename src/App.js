import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './pages/components/Header';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';

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
    </>
  );
}

export default App;
