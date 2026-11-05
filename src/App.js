import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import MyWorks from './pages/MyWorks';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Education />
      <MyWorks />
      <Skills />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
