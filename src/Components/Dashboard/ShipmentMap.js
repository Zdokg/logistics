import React, { useEffect, useRef } from 'react';
import { Truck, Navigation, Package } from 'lucide-react';
import "./ShipmentMap.css";

const ShipmentMap = () => {
  const mapRef = useRef(null);
  
  useEffect(() => {
    // In a real application, this would initialize a map library
    // like Google Maps, Mapbox, etc.
    if (mapRef.current) {
      // We'll add a placeholder image and style it to look like a map
      const mapContainer = mapRef.current;
      mapContainer.style.background = "linear-gradient(to bottom, #c3dbee, #e4eef7)";
      
      // Add some "map features" with CSS
      const addMapFeature = (left, top, size, color) => {
        const feature = document.createElement('div');
        feature.style.position = 'absolute';
        feature.style.left = left;
        feature.style.top = top;
        feature.style.width = size;
        feature.style.height = size;
        feature.style.borderRadius = '50%';
        feature.style.backgroundColor = color;
        feature.style.opacity = '0.6';
        mapContainer.appendChild(feature);
      };
      
      // Add some mock map features
      addMapFeature('20%', '30%', '60px', '#2980b9');
      addMapFeature('50%', '40%', '40px', '#2980b9');
      addMapFeature('70%', '60%', '80px', '#2980b9');
      addMapFeature('30%', '70%', '50px', '#2980b9');
    }
  }, []);

  return (
    <div className="shipment-map-card">
      <div className="shipment-map-header">
        <h2>Shipment Tracking</h2>
        <button className="view-details-button">
          View details
        </button>
      </div>
      
      <div 
        ref={mapRef} 
        className="map-container"
      >
        {/* Map Points */}
        <div className="map-point origin-point">
          <div className="point-container">
            <div className="point-icon">
              <Package className="point-svg" />
            </div>
            <div className="point-label">Origin</div>
          </div>
        </div>
        
        <div className="map-point destination-point">
          <div className="point-container">
            <div className="point-icon">
              <Navigation className="point-svg" />
            </div>
            <div className="point-label">Destination</div>
          </div>
        </div>
        
        <div className="map-point current-location">
          <div className="point-container">
            <div className="current-icon">
              <Truck className="current-svg" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="map-legend">
        <div className="legend-item">
          <div className="legend-color on-time"></div>
          <span className="legend-text">On Time</span>
        </div>
        <div className="legend-item">
          <div className="legend-color delayed"></div>
          <span className="legend-text">Delayed</span>
        </div>
        <div className="legend-item">
          <div className="legend-color issue"></div>
          <span className="legend-text">Issue</span>
        </div>
        <div className="legend-item">
          <Truck className="legend-icon" />
          <span className="legend-text">Current</span>
        </div>
      </div>
    </div>
  );
};

export default ShipmentMap;