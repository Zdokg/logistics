import React from "react";
import { color, motion } from "framer-motion";
import { Truck } from "lucide-react";
import "./Hero.css"; // Importing the external CSS file

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-pattern"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-content"
            >
              <div className="badge">
                <p className="badge-text">
                  <Truck size={18} className="icona" />
                  Reliable Logistics Solutions
                </p>
              </div>

              <h1 className="hero-title">
                <span>Delivering Excellence</span>
                <span className="highlight-titre">Across The Globe</span>
              </h1>

              <p className="hero-description">
                We provide efficient and reliable logistics services tailored to your business needs, ensuring your cargo reaches its destination safely and on time.
              </p>

              <div className="hero-buttons">
                <button className="btn-primary">Get Started</button>
                <button className="btn-outline">Learn More</button>
              </div>

              <div className="stats">
                <div>
                  <p className="stat-number">15+</p>
                  <p className="stat-label">Years Experience</p>
                </div>
                <div className="divider"></div>
                <div>
                  <p className="stat-number">500+</p>
                  <p className="stat-label">Clients Worldwide</p>
                </div>
                <div className="divider"></div>
                <div>
                  <p className="stat-number">98%</p>
                  <p className="stat-label">On-time Delivery</p>
                </div>
              </div>
              
            </motion.div>

             <div className="hero-image">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="image-wrapper"
            >
              <div className="image-background"></div>
              <div className="image-container">
                <div className="image-content"></div>
              </div>
              <div className="image-label">
                <p className="label-title">Fast & Reliable</p>
                <p className="label-text">Worldwide Shipping</p>
              </div>
            </motion.div>
          </div>
          </div>

         
        </div>
      </div>

      <div className="gradient-overlay"></div>
    </section>
  );
};

export default Hero;
