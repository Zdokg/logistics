import React, { useState, useEffect } from 'react';
import {
  Home,
  Package,
  Truck,
  Users,
  BarChart2,
  Settings,
  LogOut,
  Map,
  HelpCircle,
  UserPlus
} from 'lucide-react';

import "./SidebarD.css";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/driver" },
  { name: "Messages", path: "/messagesD" },
  { name: "My Truck", path: "/truckD" },
  { name: "Shipping Details", path: "/SD" },
  { name: "Profile", path: "/profile" },
];

const SidebarItem = ({ icon, label, isActive = false, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`sidebar-item ${isActive ? 'active' : ''}`}
    >
      <div className="sidebar-item-content">
        <div className="sidebar-icon">
          {icon}
        </div>
        <span className={`sidebar-label ${isOpen ? 'open' : 'closed'}`}>
          {label}
        </span>
      </div>
    </button>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Dashboard");

  useEffect(() => {
    const currentItem = menuItems.find(item => location.pathname.startsWith(item.path));
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location.pathname]);

  const handleItemClick = (label) => {
    const item = menuItems.find(i => i.name === label);
    if (item) {
      setActiveItem(label);
      navigate(item.path);
    }
  };

  const handleItemonClick = (item) => {
    if (item === "Logout") {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="sidebar-logo">
              <button className="navbar-logoo" onClick={() => navigate("/")}>GSL</button>
            </div>
          </div>
        </div>

        <div className="sidebar-content">
          <div className={`sidebar-section-title ${isOpen ? 'visible' : 'hidden'}`}>
            Main
          </div>

          <SidebarItem
            icon={<Home size={20} />}
            label="Dashboard"
            isActive={activeItem === 'Dashboard'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Dashboard')}
          />

          <SidebarItem
            icon={<Package size={20} />}
            label="Messages"
            isActive={activeItem === 'Messages'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Messages')}
          />

          <SidebarItem
            icon={<Truck size={20} />}
            label="My Truck"
            isActive={activeItem === 'My Truck'}
            isOpen={isOpen}
            onClick={() => handleItemClick('My Truck')}
          />

          <SidebarItem
            icon={<Map size={20} />}
            label="Shipping Details"
            isActive={activeItem === 'Shipping Details'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Shipping Details')}
          />

          <SidebarItem
            icon={<Users size={20} />}
            label="Profile"
            isActive={activeItem === 'Profile'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Profile')}
          />
          
        </div>

        <div className="sidebar-footer">
          <SidebarItem
            icon={<LogOut size={20} />}
            label="Logout"
            isOpen={isOpen}
            onClick={() => handleItemonClick('Logout')}
          />
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;