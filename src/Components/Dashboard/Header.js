import { Bell, Search } from "lucide-react";
import { useState } from "react";
import "./Header.css"; // We'll create this CSS file

export default function Header() {
  const [notifications] = useState(3);
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-search-container">
          <div className="search-input-wrapper">
            <div className="search-icon">
              <Search className="search-icon-svg" />
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          </div>
        </div>
        
        <div className="header-actions">
          <div className="notifications-wrapper">
            <button className="notifications-button">
              <Bell className="bell-icon" />
              {notifications > 0 && (
                <span className="notification-badge">
                  {notifications}
                </span>
              )}
            </button>
          </div>
          
          <div className="user-profile">
            <div className="user-avatar">
              <span className="avatar-initials">JD</span>
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