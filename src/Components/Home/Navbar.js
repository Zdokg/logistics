import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css'; // Import the CSS file
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to={"/"} className="navbar-logo">GSL
                    </Link>
                    <Link to={"/"} className="navbar-company-name">Golden Sunrise Logistics
                    </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => scrollToSection(link.href)}
              className="nav-link"
            >
              {link.title}
            </button>
          ))}
          <Link to="./login" className="felsa">
            Log In
          </Link>
          <Link to="./signup" className="felsa-2">
            Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button 
            onClick={toggleMobileMenu}
            className="menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mobile-nav"
        >
          <div className="mobile-nav-container">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => scrollToSection(link.href)}
                className="mobile-nav-link"
              >
                {link.title}
              </button>
            ))}
            
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;