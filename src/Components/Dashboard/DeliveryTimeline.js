import React from 'react';
import { Package, Check, Clock, AlertTriangle } from 'lucide-react';
import "./DeliveryTimeline.css";
const deliveries = [
  {
    id: '1',
    orderNumber: 'ORD-23981',
    customer: 'Sarah Johnson',
    status: 'delivered',
    date: '10:32 AM',
    location: 'New York, NY'
  },
  {
    id: '2',
    orderNumber: 'ORD-23982',
    customer: 'Michael Chen',
    status: 'in-transit',
    date: '11:15 AM',
    location: 'Boston, MA'
  },
  {
    id: '3',
    orderNumber: 'ORD-23983',
    customer: 'Emily Williams',
    status: 'delayed',
    date: '12:05 PM',
    location: 'Chicago, IL'
  },
  {
    id: '4',
    orderNumber: 'ORD-23984',
    customer: 'Robert Garcia',
    status: 'in-transit',
    date: '01:47 PM',
    location: 'Miami, FL'
  },
  {
    id: '5',
    orderNumber: 'ORD-23985',
    customer: 'Alex Thompson',
    status: 'delivered',
    date: '02:30 PM',
    location: 'Seattle, WA'
  }
];

const getStatusIcon = (status) => {
  switch (status) {
    case 'delivered':
      return <Check className="status-icon delivered" />;
    case 'in-transit':
      return <Clock className="status-icon in-transit" />;
    case 'delayed':
      return <AlertTriangle className="status-icon delayed" />;
    default:
      return <Package className="status-icon" />;
  }
};

const DeliveryTimeline = () => {
  return (
    <div className="delivery-timeline-card">
      <div className="delivery-timeline-header">
        <h2>Recent Deliveries</h2>
        <button className="view-all-button">
          View all
        </button>
      </div>

      <div className="delivery-items-container">
        {deliveries.map((delivery, index) => (
          <div 
            key={delivery.id} 
            className="delivery-item"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="delivery-icon-container">
              <Package className="delivery-package-icon" />
            </div>
            
            <div className="delivery-details">
              <div className="delivery-info-header">
                <div>
                  <p className="order-number">{delivery.orderNumber}</p>
                  <p className="customer-name">{delivery.customer}</p>
                </div>
                <span className={`status-badge ${delivery.status}`}>
                  {getStatusIcon(delivery.status)}
                  <span className="status-text">
                    {delivery.status.replace('-', ' ')}
                  </span>
                </span>
              </div>
              
              <div className="delivery-meta">
                <span>{delivery.date}</span>
                <span className="meta-separator">•</span>
                <span>{delivery.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryTimeline;