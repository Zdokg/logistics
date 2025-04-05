import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Truck, Package, Building, Map, Calendar, ShoppingCart } from 'lucide-react';
import './Service.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const services = [
    {
      icon: <Truck size={28} />, title: "Road Freight",
      description: "Reliable door-to-door road freight services with options for full truckload (FTL) or less-than-truckload (LTL) shipping.",
      color: "orange"
    },
    {
      icon: <Package size={28} />, title: "Air Freight",
      description: "Expedited air freight solutions for time-sensitive cargo, with global coverage and real-time tracking capabilities.",
      color: "blue"
    },
    {
      icon: <Building size={28} />, title: "Warehousing",
      description: "Strategic warehousing and distribution centers offering secure storage with advanced inventory management systems.",
      color: "green"
    },
    {
      icon: <Map size={28} />, title: "Supply Chain",
      description: "End-to-end supply chain solutions including planning, implementation, and management of goods movement.",
      color: "purple"
    },
    {
      icon: <Calendar size={28} />, title: "Project Cargo",
      description: "Specialized handling of oversized, heavy, high-value, or complex cargo requiring specific expertise.",
      color: "yellow"
    },
    {
      icon: <ShoppingCart size={28} />, title: "E-commerce",
      description: "Tailored logistics solutions for e-commerce businesses including fulfillment, returns processing, and last-mile delivery.",
      color: "red"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container" ref={ref}>
        <div className="services-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="services-title">
              Our <span className="highlight">Services</span>
            </h2>
            <p className="services-subtitle">
              We offer comprehensive logistics solutions tailored to meet the unique needs of your business.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`service-card`}
            >
              <div className="service-card-inner">
                <div className={`service-icon ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="service-title">
                  {service.title}
                </h3>
                <p className="service-description">
                  {service.description}
                </p>
                <a href="#" className="service-link">
                  Learn more
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="quote-button-wrapper">
        </div>
      </div>
    </section>
  );
};

export default Services;