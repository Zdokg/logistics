import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./ShipmentStatus.css";

const data = [
  { name: 'Mon', onTime: 40, delayed: 24, total: 64 },
  { name: 'Tue', onTime: 38, delayed: 19, total: 57 },
  { name: 'Wed', onTime: 42, delayed: 22, total: 64 },
  { name: 'Thu', onTime: 48, delayed: 15, total: 63 },
  { name: 'Fri', onTime: 52, delayed: 17, total: 69 },
  { name: 'Sat', onTime: 36, delayed: 13, total: 49 },
  { name: 'Sun', onTime: 30, delayed: 9, total: 39 },
];

const ShipmentStatus = () => {
  return (
    <div className="shipment-status-card">
      <div className="shipment-status-header">
        <h2>Shipment Status</h2>
        <div className="time-filter-buttons">
          <button className="time-filter-button active">
            Week
          </button>
          <button className="time-filter-button">
            Month
          </button>
          <button className="time-filter-button">
            Year
          </button>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorOnTime" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2980b9" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2980b9" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDelayed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f39c12" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f39c12" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="onTime" 
              stackId="1"
              stroke="#2980b9"
              fillOpacity={1}
              fill="url(#colorOnTime)"
              animationDuration={1500}
            />
            <Area 
              type="monotone" 
              dataKey="delayed" 
              stackId="1"
              stroke="#f39c12"
              fillOpacity={1}
              fill="url(#colorDelayed)"
              animationDuration={1500}
              animationBegin={300}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="shipment-status-footer">
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-color on-time"></div>
            <span className="legend-text">On Time</span>
          </div>
          <div className="legend-item">
            <div className="legend-color delayed"></div>
            <span className="legend-text">Delayed</span>
          </div>
        </div>
        <div className="shipment-count">
          <span className="count-number">405</span> shipments this week
        </div>
      </div>
    </div>
  );
};

export default ShipmentStatus;