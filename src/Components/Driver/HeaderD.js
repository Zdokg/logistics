import { Bell, Search } from "lucide-react";
import { useState } from "react";
import "./HeaderD.css";

export default function Header() {
  const [notifications] = useState(3);
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="search-section">
          <div className="search-input-container">
            <div className="search-icon">
              <Search className="icon" />
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          </div>
        </div>
        
        <div className="user-section">
          <div className="notification-container">
            <button className="notification-button">
              <Bell className="icon" />
              {notifications > 0 && (
                <span className="notification-badge">
                  {notifications}
                </span>
              )}
            </button>
          </div>
          
          <div className="user-profile">
            <div className="avatar">
              <span className="avatar-text">JD</span>
            </div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-role">Driver</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}