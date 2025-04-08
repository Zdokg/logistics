import React from 'react';
import { ArrowDownIcon, ArrowUpIcon, PackageIcon, TruckIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import "./Stats.css"; // assuming this will contain the CSS styles

const StatCard = ({ title, value, change, icon, delay }) => {
  return (
    <div className={`stat-card ${delay}`}>
      <div className="stat-header">
        <div className="stat-icon">{icon}</div>
        <div className={`stat-change ${change >= 0 ? 'positive' : 'negative'}`}>
          {change >= 0 ? <ArrowUpIcon className="arrow-icon" /> : <ArrowDownIcon className="arrow-icon" />}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
      <div className="stat-body">
        <h3 className="stat-title">{title}</h3>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { title: 'Active Shipments', value: '284', change: 12, icon: <PackageIcon />, delay: 'delay-100' },
    { title: 'In Transit', value: '189', change: 8, icon: <TruckIcon />, delay: 'delay-200' },
    { title: 'Delayed', value: '24', change: -5, icon: <ClockIcon />, delay: 'delay-300' },
    { title: 'Delivered Today', value: '42', change: 18, icon: <MapPinIcon />, delay: 'delay-400' }
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default Stats;
