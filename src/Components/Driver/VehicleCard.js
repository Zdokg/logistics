import React from 'react';
import './VehicleCard.css';
import { Car } from 'lucide-react';

const VehicleCard = ({ vehicle }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'operational': return 'status-green';
      case 'maintenance': return 'status-yellow';
      case 'out-of-service': return 'status-red';
      default: return 'status-default';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'operational': return 'Operational';
      case 'maintenance': return 'Under Maintenance';
      case 'out-of-service': return 'Out of Service';
      default: return 'Unknown';
    }
  };

  const getFuelColor = (level) => {
    if (level > 60) return 'fuel-green';
    if (level > 20) return 'fuel-yellow';
    return 'fuel-red';
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <Car size={24} className="icon" />
          <h2>Vehicle Information</h2>
        </div>
      </div>

      <div className="card-content">
        <div className="vehicle-grid">
          <div className="vehicle-column">
            <div className="detail-row">
              <span className="label">Vehicle ID</span>
              <span>{vehicle.id}</span>
            </div>
            <div className="detail-row">
              <span className="label">Type</span>
              <span>{vehicle.type}</span>
            </div>
            <div className="detail-row">
              <span className="label">Model</span>
              <span>{vehicle.model}</span>
            </div>
            <div className="detail-row">
              <span className="label">License Plate</span>
              <span>{vehicle.licensePlate}</span>
            </div>
            <div className="detail-row status-row">
              <span className="label">Status</span>
              <div className="status">
                <div className={`status-dot ${getStatusClass(vehicle.status)}`}></div>
                <span>{getStatusText(vehicle.status)}</span>
              </div>
            </div>
          </div>

          <div className="vehicle-column">
            <div className="fuel-section">
              <div className="fuel-labels">
                <span className="label">Fuel Level</span>
                <span>{vehicle.fuelLevel}%</span>
              </div>
              <div className="fuel-bar">
                <div 
                  className={`fuel-bar-fill ${getFuelColor(vehicle.fuelLevel)}`} 
                  style={{ width: `${vehicle.fuelLevel}%` }}
                ></div>
              </div>
            </div>

            <div className="detail-row">
              <span className="label">Last Maintenance</span>
              <span>{vehicle.lastMaintenance}</span>
            </div>
            <div className="detail-row">
              <span className="label">Next Maintenance</span>
              <span>{vehicle.nextMaintenance}</span>
            </div>
            <div className="detail-row">
              <span className="label">Mileage</span>
              <span>{vehicle.mileage.toLocaleString()} km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
