import React from 'react';
import { MapPin, Route } from 'lucide-react';
import './RouteMap.css';

const RouteMap = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <Route className="icon" />
          Delivery Route
        </h2>
      </div>
      <div className="card-content">
        <div className="map-container">
          <div className="map-placeholder">
            <MapPin className="map-pin" />
            <p className="map-message">Interactive map would be displayed here</p>
            <p className="route-text">Current route: Chicago, IL → Detroit, MI</p>
          </div>

          <div className="route-point top-left">
            <div className="point-indicator">
              <div className="dot blue"></div>
              <span className="point-text">Current Location: Gary, IN</span>
            </div>
          </div>

          <div className="route-point bottom-right">
            <div className="point-indicator">
              <div className="dot green"></div>
              <span className="point-text">Origin: Chicago, IL</span>
            </div>
            <div className="point-indicator">
              <div className="dot red"></div>
              <span className="point-text">Destination: Detroit, MI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMap;
