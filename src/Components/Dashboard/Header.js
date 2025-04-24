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
        <div className="notification-container">
            <button className="notification-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
            </svg>
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