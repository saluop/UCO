import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import WhoWeAre from './pages/WhoWeAre';
import OurTeam from './pages/OurTeam';
import OurProjects from './pages/OurProjects';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;