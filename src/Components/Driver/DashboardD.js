import { ArrowDown, ArrowUp, Clock, Calendar, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import {useState} from "react";
import "./DashboardD.css";
import Header from "../Driver/HeaderD";
import Sidebar from "../Driver/SiderbarD";

export default function Dashboard() {
  // Sample data - in a real app, this would come from an API
  const currentAssignment = {
    id: "SH-12345",
    status: "In Progress",
    progress: 68,
    origin: "Los Angeles Port, CA",
    destination: "Phoenix Distribution Center, AZ",
    departureTime: "08:00 AM",
    estimatedArrival: "4:30 PM",
    distanceCovered: 380,
    totalDistance: 560,
    cargo: "Electronics",
    priority: "High",
    notes: "Fragile items, handle with care",
  };

  const recentUpdates = [
    {
      id: 1,
      message: "Your route has been updated to avoid traffic on I-10",
      time: "10 minutes ago",
      isAlert: false,
    },
    {
      id: 2,
      message: "Admin message: Call dispatch when you arrive at checkpoint",
      time: "25 minutes ago",
      isAlert: true,
    },
    {
      id: 3,
      message: "Fuel stop added to your route at mile marker 245",
      time: "1 hour ago",
      isAlert: false,
    },
  ];

  const weeklyStats = {
    deliveries: 12,
    hoursLogged: 42,
    milesDriven: 1860,
    fuelConsumed: 210,
  };

 const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  
  return (
    <div className="dashboard-container">
       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            
          <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
            <Header toggleSidebar={toggleSidebar} />
            
          

      <div className="dashboard-header">
        <h1>Driver Dashboard</h1>
        <p className="subtitle">Welcome back, John! Here's your current status</p>
      </div>

      <div className="dashboard-grid">
        <div className="assignment-card purple-border">
          <div className="card-header">
            <div className="card-title">Current Assignment</div>
            <span className="status-badge">{currentAssignment.status}</span>
          </div>
          <div className="card-content">
            <div className="assignment-content">
              <div className="progress-section">
                <div className="progress-header">
                  <div className="shipment-id">Shipment #{currentAssignment.id}</div>
                  <div className="progress-percent">{currentAssignment.progress}% Complete</div>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${currentAssignment.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="assignment-details">
                <div className="location-section">
                  <div className="location-item">
                    <ArrowUp className="icon purple" />
                    <div>
                      <div className="location-label">Origin</div>
                      <div className="location-value">{currentAssignment.origin}</div>
                    </div>
                  </div>
                  <div className="location-item">
                    <ArrowDown className="icon orange" />
                    <div>
                      <div className="location-label">Destination</div>
                      <div className="location-value">{currentAssignment.destination}</div>
                    </div>
                  </div>

                  <div className="cargo-section">
                    <div className="section-label">Cargo Information</div>
                    <div className="cargo-grid">
                      <div className="info-box">
                        <div className="info-label">Type</div>
                        <div className="info-value">{currentAssignment.cargo}</div>
                      </div>
                      <div className="info-box">
                        <div className="info-label">Priority</div>
                        <div className="info-value orange">{currentAssignment.priority}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="time-distance-section">
                  <div className="time-grid">
                    <div className="info-box">
                      <div className="info-label">
                        <Clock className="small-icon" />
                        <span>Departure</span>
                      </div>
                      <div className="info-value">{currentAssignment.departureTime}</div>
                    </div>
                    <div className="info-box">
                      <div className="info-label">
                        <Calendar className="small-icon" />
                        <span>Est. Arrival</span>
                      </div>
                      <div className="info-value">{currentAssignment.estimatedArrival}</div>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="info-label">
                      <MapPin className="small-icon" />
                      <span>Distance</span>
                    </div>
                    <div className="distance-progress">
                      <div className="progress-bar-container">
                        <div 
                          className="progress-bar" 
                          style={{ 
                            width: `${(currentAssignment.distanceCovered / currentAssignment.totalDistance) * 100}%` 
                          }}
                        ></div>
                      </div>
                      <div className="distance-text">
                        {currentAssignment.distanceCovered} / {currentAssignment.totalDistance} mi
                      </div>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="info-label">Notes</div>
                    <div className="info-value">{currentAssignment.notes}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="updates-card">
          <div className="card-header">
            <div className="card-title">Recent Updates</div>
          </div>
          <div className="card-content">
            <div className="updates-list">
              {recentUpdates.map((update) => (
                <div key={update.id} className="update-item">
                  {update.isAlert ? (
                    <AlertCircle className="icon orange" />
                  ) : (
                    <CheckCircle2 className="icon green" />
                  )}
                  <div>
                    <div className="update-message">{update.message}</div>
                    <div className="update-time">{update.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="card-header">
            <div className="card-title">Deliveries</div>
          </div>
          <div className="card-content">
            <div className="stat-value purple">{weeklyStats.deliveries}</div>
            <p className="stat-label">Completed this week</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="card-header">
            <div className="card-title">Hours</div>
          </div>
          <div className="card-content">
            <div className="stat-value purple">{weeklyStats.hoursLogged}</div>
            <p className="stat-label">Logged this week</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="card-header">
            <div className="card-title">Miles</div>
          </div>
          <div className="card-content">
            <div className="stat-value purple">{weeklyStats.milesDriven}</div>
            <p className="stat-label">Driven this week</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="card-header">
            <div className="card-title">Fuel</div>
          </div>
          <div className="card-content">
            <div className="stat-value purple">{weeklyStats.fuelConsumed}</div>
            <p className="stat-label">Gallons consumed</p>
          </div>
        </div>

      </div>
    </div>
    
    </div>
  );
}