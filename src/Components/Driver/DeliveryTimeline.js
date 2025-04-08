import React from 'react';
import { Clock, CheckCircle, Truck, Package, Home, CircleDot } from 'lucide-react';
import './DeliveryTimeline.css';

const DeliveryTimeline = ({ stops, currentStopId }) => {
  const getStopIcon = (type, completed, isCurrent) => {
    if (completed) {
      return <CheckCircle className="icon green" />;
    }

    if (isCurrent) {
      return <CircleDot className="icon blue" />;
    }

    switch (type) {
      case 'pickup':
        return <Package className="icon gray" />;
      case 'delivery':
        return <Home className="icon gray" />;
      case 'checkpoint':
        return <Truck className="icon gray" />;
      default:
        return <CircleDot className="icon gray" />;
    }
  };

  const getStopTitle = (type) => {
    switch (type) {
      case 'pickup': return 'Pickup';
      case 'delivery': return 'Delivery';
      case 'checkpoint': return 'Checkpoint';
      default: return 'Stop';
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <Clock className="title-icon" />
          Delivery Timeline
        </h2>
      </div>
      <div className="card-content">
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="timeline-list">
            {stops.map((stop) => {
              const isCurrent = stop.id === currentStopId;

              return (
                <div key={stop.id} className={`timeline-item ${isCurrent ? 'current' : ''}`}>
                  <div className="timeline-icon">
                    {getStopIcon(stop.type, stop.completed, isCurrent)}
                  </div>

                  <div className="timeline-details">
                    <div className={`timeline-location ${isCurrent ? 'highlight' : ''}`}>
                      <span>{getStopTitle(stop.type)}:</span> <span>{stop.location}</span>
                      {isCurrent && <span className="current-label">(Current)</span>}
                    </div>

                    <div className="timeline-time">
                      <Clock className="time-icon" />
                      <span>{stop.time}</span>
                    </div>

                    {stop.notes && (
                      <div className="timeline-notes">{stop.notes}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTimeline;
