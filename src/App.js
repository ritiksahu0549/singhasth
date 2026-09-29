import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Ujjain from './pages/Ujjain';
import Mahakaleshwar from './pages/Mahakaleshwar';
import KumbhMela from './pages/KumbhMela';
import Contact from './pages/Contact';
import About from './pages/About';
import TempleDetails from './pages/TempleDetails';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
     <LanguageProvider>
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ujjain" element={<Ujjain />} />
        <Route path="/mahakaleshwar" element={<Mahakaleshwar />} />
        <Route path="/KumbhMela" element={<KumbhMela />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/temple/:id" element={<TempleDetails />} />
        
        
      </Routes>
      
      <Footer />
    </Router>
    </LanguageProvider>
  );
}

export default App;
