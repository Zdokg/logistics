import React, { useState, useEffect } from 'react';
import {
  Home,
  Package,
  Truck,
  Users,
  BarChart2,
  Settings,
  LogOut,
  HelpCircle,
  UserPlus,
  MessageCircle
} from 'lucide-react';

import "./Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Shipments", path: "/shipments" },
  { name: "Fleet", path: "/fleet" },
  { name: "Chat", path: "/messagesA" },
  { name: "Customers", path: "/customer" },
  { name: "Analytics", path: "/analytics" },
  { name: "Settings", path: "/settings" },
  { name: "Help & Support", path: "/help" },
  { name: "Hiring", path: "/hiring" }
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
            label="Shipments"
            isActive={activeItem === 'Shipments'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Shipments')}
          />
          <SidebarItem
            icon={<Truck size={20} />}
            label="Fleet"
            isActive={activeItem === 'Fleet'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Fleet')}
          />
          <SidebarItem
            icon={<MessageCircle size={20} />}
            label="Chat"
            isActive={activeItem === 'Chat'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Chat')}
          />

          <div className={`sidebar-section-title ${isOpen ? 'visible' : 'hidden'}`}>
            Management
          </div>

          <SidebarItem
            icon={<Users size={20} />}
            label="Customers"
            isActive={activeItem === 'Customers'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Customers')}
          />

          <SidebarItem
            icon={<UserPlus size={20} />}
            label="Hiring"
            isActive={activeItem === 'Hiring'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Hiring')}
          />

          <SidebarItem
            icon={<BarChart2 size={20} />}
            label="Analytics"
            isActive={activeItem === 'Analytics'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Analytics')}
          />

          <SidebarItem
            icon={<Settings size={20} />}
            label="Settings"
            isActive={activeItem === 'Settings'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Settings')}
          />

        </div>

        <div className="sidebar-footer">
          <SidebarItem
            icon={<HelpCircle size={20} />}
            label="Help & Support"
            isActive={activeItem === 'Help & Support'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Help & Support')}
          />
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
};

export default Sidebar;
