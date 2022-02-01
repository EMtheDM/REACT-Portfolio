import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/resume' exact component={Resume} />
      </Routes>
    </Router>
  );
};

export default App;
