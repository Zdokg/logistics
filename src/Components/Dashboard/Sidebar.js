import React, { useState } from 'react';
import { 
  Home, 
  Package, 
  Truck, 
  Users, 
  BarChart2, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Map,
  Calendar,
  HelpCircle
} from 'lucide-react';
import "./Sidebar.css";

const SidebarItem = ({ 
  icon, 
  label, 
  isActive = false, 
  isOpen,
  onClick 
}) => {
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
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="sidebar-logo">
              L
            </div>
            <h2 className={`sidebar-title ${isOpen ? 'open' : 'closed'}`}>
              Logistico
            </h2>
          </div>
          <button 
            onClick={toggleSidebar}
            className="sidebar-toggle"
          >
            {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
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
            icon={<Map size={20} />} 
            label="Routes" 
            isActive={activeItem === 'Routes'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Routes')}
          />
          
          <SidebarItem 
            icon={<Calendar size={20} />} 
            label="Schedule" 
            isActive={activeItem === 'Schedule'}
            isOpen={isOpen}
            onClick={() => handleItemClick('Schedule')}
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
            isOpen={isOpen}
            onClick={() => handleItemClick('Help')}
          />
          
          <SidebarItem 
            icon={<LogOut size={20} />} 
            label="Logout" 
            isOpen={isOpen}
            onClick={() => handleItemClick('Logout')}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;