import React from 'react';
import { Bell, User, Menu } from 'lucide-react';
import './DashboardHeader.css';

const DashboardHeader = () => {
  const showNotification = () => {
    alert("You have no new notifications");
  };

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button className="sidebar-toggle mobile-only" onClick={() => {}}>
          <Menu className="icon" />
          <span className="visually-hidden">Toggle sidebar</span>
        </button>
        <h1 className="dashboard-title desktop-only">Driver Dashboard</h1>
      </div>

      <div className="header-right">
        <button className="icon-button" onClick={showNotification}>
          <Bell className="icon" />
          <span className="visually-hidden">Notifications</span>
        </button>
        
        <div className="dropdown">
          <button className="avatar-button">
            <div className="avatar">
              <img src="/placeholder.svg" alt="Driver" className="avatar-image" />
              <span className="avatar-fallback">JD</span>
            </div>
          </button>
          <div className="dropdown-content">
            <div className="dropdown-label">John Doe</div>
            <div className="dropdown-separator"></div>
            <div className="dropdown-item">
              <User className="item-icon" />
              <span>Profile</span>
            </div>
            <div className="dropdown-item">Settings</div>
            <div className="dropdown-separator"></div>
            <div className="dropdown-item">Log out</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;