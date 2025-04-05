import React, { useEffect, useState } from 'react';
import SplashScreen from '../Components/SplashScreen';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Service';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.animate-reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('reveal');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    document.body.style.overflow = 'auto';
  };

  // Prevent scrolling when splash screen is visible
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    }
  }, [showSplash]);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={showSplash ? 'homepage-hidden' : 'homepage-visible'}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;