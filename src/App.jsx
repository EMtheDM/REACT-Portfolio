import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='REACT-Portfolio/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
