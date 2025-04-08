import React from 'react';
import './ShipmentCard.css';
import { Package, Clock, Calendar, CheckCircle } from 'lucide-react';

const ShipmentCard = ({ shipment }) => {
  const getStatusColorClass = (status) => {
    switch (status) {
      case 'pending': return 'status-yellow';
      case 'in-transit': return 'status-blue';
      case 'delivered': return 'status-green';
      case 'failed': return 'status-red';
      default: return 'status-default';
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'low': return 'priority-low';
      case 'medium': return 'priority-medium';
      case 'high': return 'priority-high';
      default: return '';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'in-transit': return 'In Transit';
      case 'delivered': return 'Delivered';
      case 'failed': return 'Failed';
      default: return 'Unknown';
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <Package size={24} className="icon" />
          <h2>Current Shipment</h2>
        </div>
        <span className={`badge ${getStatusColorClass(shipment.status)}`}>
          {getStatusText(shipment.status)}
        </span>
      </div>

      <div className="card-content">
        <div className="shipment-details">
          <div className="shipment-column">
            <div className="detail-row">
              <span className="label">Shipment ID</span>
              <span>{shipment.id}</span>
            </div>
            <div className="detail-row">
              <span className="label">Origin</span>
              <span>{shipment.origin}</span>
            </div>
            <div className="detail-row">
              <span className="label">Destination</span>
              <span>{shipment.destination}</span>
            </div>
            <div className="detail-row">
              <span className="label">Customer</span>
              <span>{shipment.customer}</span>
            </div>
            <div className="detail-row">
              <span className="label">Priority</span>
              <span className={`badge ${getPriorityClass(shipment.priority)}`}>
                {shipment.priority.charAt(0).toUpperCase() + shipment.priority.slice(1)}
              </span>
            </div>
          </div>

          <div className="shipment-column">
            <div className="detail-row icon-text">
              <Calendar size={16} className="icon-small" />
              <span className="label">Pickup Date:</span>
              <span>{shipment.pickup}</span>
            </div>
            <div className="detail-row icon-text">
              <Calendar size={16} className="icon-small" />
              <span className="label">Delivery Date:</span>
              <span>{shipment.delivery}</span>
            </div>
            <div className="detail-row icon-text">
              <Clock size={16} className="icon-small" />
              <span className="label">ETA:</span>
              <span>{shipment.estimatedArrival}</span>
            </div>
            <div className="detail-row">
              <span className="label">Packages</span>
              <span>{shipment.packages}</span>
            </div>
            <div className="detail-row">
              <span className="label">Weight</span>
              <span>{shipment.weight} kg</span>
            </div>
          </div>
        </div>

        <div className="shipment-description">
          <h4>Description</h4>
          <p>{shipment.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShipmentCard;
