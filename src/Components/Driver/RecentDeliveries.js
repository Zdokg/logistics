import React from 'react';
import { Package, Calendar, ChevronRight } from 'lucide-react';
import './RecentDeliveries.css';

const RecentDeliveries = ({ deliveries }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'delivered':
        return 'badge green';
      case 'failed':
        return 'badge red';
      case 'returned':
        return 'badge yellow';
      default:
        return 'badge gray';
    }
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="header-row">
          <h2 className="card-title">
            <Calendar className="title-icon" />
            Recent Deliveries
          </h2>
          <button className="view-all-btn">
            View All <ChevronRight className="arrow-icon" />
          </button>
        </div>
      </div>
      <div className="card-content">
        {deliveries.map((delivery) => (
          <div key={delivery.id} className="delivery-item">
            <div className="delivery-info">
              <Package className="package-icon" />
              <div>
                <div className="destination">{delivery.destination}</div>
                <div className="shipment-id">ID: {delivery.shipmentId}</div>
              </div>
            </div>
            <div className="delivery-meta">
              <div className="date">{delivery.date}</div>
              <span className={getStatusClass(delivery.status)}>
                {getStatusText(delivery.status)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDeliveries;
