import React from 'react';
import { Bell, Menu, Search, User } from 'lucide-react';
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header-container">
      <div className="header-left">
        <button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="menu-button"
        >
          <Menu className="menu-icon" />
        </button>
        <h1 className="header-title">Logistics Dashboard</h1>
      </div>
      
      <div className="header-search">
        <div className="search-container">
          <Search className="search-icon" />
          <input 
            type="search" 
            placeholder="Search shipments, orders..." 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        <button variant="ghost" size="icon" className="notification-button">
          <Bell className="notification-icon" />
          <span className="notification-badge"></span>
        </button>
        <div className="user-avatar">
          <User className="user-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;