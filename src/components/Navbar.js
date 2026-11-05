import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo" onClick={() => scrollTo('home')}>
        Santhosh Sivakumar
      </div>
      <div className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About Me</a>
        <a href="#works" onClick={(e) => { e.preventDefault(); scrollTo('works'); }}>My Works</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>Skills</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
      </div>
      <div
        className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
