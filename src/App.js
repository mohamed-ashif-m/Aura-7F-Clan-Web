import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AnimatedBee from './components/AnimatedBee';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Events from './pages/Events';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AnimatedBee />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
