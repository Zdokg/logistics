import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="splash-box">
        <motion.div
          className="splash-ring"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: isLoading ? 1 : 1.2,
            opacity: isLoading ? 1 : 0
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          className="splash-content"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="splash-title">GSL</div>
        </motion.div>
        <motion.div
          className="splash-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
        >
          Golden Sunrise Logistics
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
