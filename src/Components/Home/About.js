import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, Truck, Building, Clock } from 'lucide-react';
import './About.css'; // Import the CSS file

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const features = [
    {
      icon: <Truck className="feature-icon" size={36} />,
      title: "Efficient Transport",
      description: "Our fleet ensures timely and secure transportation of your goods with GPS-tracked vehicles."
    },
    {
      icon: <Package className="feature-icon" size={36} />,
      title: "Warehousing",
      description: "Modern warehouses with advanced inventory management systems for optimal storage."
    },
    {
      icon: <Clock className="feature-icon" size={36} />,
      title: "Express Delivery",
      description: "Expedited shipping options for time-sensitive deliveries to meet tight deadlines."
    },
    {
      icon: <Building className="feature-icon" size={36} />,
      title: "Global Network",
      description: "Extensive partner network across 75+ countries for seamless international logistics."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="pattern"></div>
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            About <span className="primary-text">Golden Sunrise Logistics</span>
          </h2>
          <p className="about-subtitle">
            With over 15 years of experience, we've built a reputation for excellence in the logistics industry.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image-decorator"></div>
            <div className="about-image-wrapper">
              <img 
                src="https://img.freepik.com/free-photo/photorealistic-scene-with-warehouse-logistics-operations_23-2151468808.jpg?semt=ais_hybrid&w=740"
                alt="Logistics warehouse" 
                className="about-image"
              />
            </div>
          </div>

          <div className="about-text" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
              className="about-story"
            >
              <h3 className="story-title">Our Story</h3>
              <p className="story-text">
                Founded in 2008, Golden Sunrise Logistics began with a simple mission: 
                to provide businesses with reliable, efficient, and cost-effective logistics solutions. 
                From a small local operation, we've grown into a global provider serving clients across 
                multiple industries and continents.
              </p>
              <p className="story-text">
                We combine industry expertise with cutting-edge technology to streamline the supply chain 
                process, ensuring that your products reach their destination safely and on time. 
                Our dedicated team works tirelessly to exceed client expectations and provide 
                personalized service every step of the way.
              </p>
              <div className="story-tags">
                <div className="tags-container">
                  <div className="tag">
                    <span className="tag-text">Global Reach</span>
                  </div>
                  <div className="tag">
                    <span className="tag-text">24/7 Support</span>
                  </div>
                  <div className="tag">
                    <span className="tag-text">Custom Solutions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="features-grid"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card"
            >
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;