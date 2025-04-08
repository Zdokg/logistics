import React, { useState, useEffect } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
import Stats from '../Dashboard/Stats';
import ShipmentStatus from '../Dashboard/ShipmentStatus';
import ShipmentMap from '../Dashboard/ShipmentMap';
import DeliveryTimeline from '../Dashboard/DeliveryTimeline';
import './Dashboard.css'; // Import the CSS file


const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Only render content after first mount to ensure animations play properly
  if (!mounted) {
    return null;
  }

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="main-content-inner">
          <div className="welcome-section">
            <h1 className="welcome-title">Welcome back, Admin</h1>
            <p className="welcome-subtitle">
              Here's what's happening with your shipments today
            </p>
          </div>
          
          <Stats />
          
          <div className="grid-container">
            <ShipmentStatus />
            <ShipmentMap />
          </div>
          
          <DeliveryTimeline />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;