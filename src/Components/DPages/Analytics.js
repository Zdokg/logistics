import React, {useState} from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import "./Analytics.css";
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
const monthlyData = [
  { name: "Jan", shipments: 65, revenue: 125000 },
  { name: "Feb", shipments: 80, revenue: 145000 },
  { name: "Mar", shipments: 95, revenue: 165000 },
  { name: "Apr", shipments: 85, revenue: 155000 },
  { name: "May", shipments: 110, revenue: 185000 },
  { name: "Jun", shipments: 130, revenue: 210000 },
  { name: "Jul", shipments: 120, revenue: 200000 },
  { name: "Aug", shipments: 105, revenue: 175000 },
  { name: "Sep", shipments: 125, revenue: 205000 },
  { name: "Oct", shipments: 135, revenue: 220000 },
  { name: "Nov", shipments: 115, revenue: 195000 },
  { name: "Dec", shipments: 95, revenue: 165000 },
];

const transportModeData = [
  { name: "Sea", value: 45 },
  { name: "Air", value: 25 },
  { name: "Road", value: 20 },
  { name: "Rail", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const customerData = [
  { name: "TechGlobal", revenue: 87000 },
  { name: "MedSupply", revenue: 63000 },
  { name: "AutoZone", revenue: 52000 },
  { name: "Modern Living", revenue: 48000 },
  { name: "FreshFoods", revenue: 38000 },
  { name: "Others", revenue: 112000 },
];

const Analytics = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [selectedPeriod, setSelectedPeriod] = React.useState("year");
 const [sidebarOpen, setSidebarOpen] = useState(true);
const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};
  return (
    <div className="analytics-container">
    <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
    <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <Header toggleSidebar={toggleSidebar} />
      
    <main className="main-content-inner">
      
      <div className="analytics-header">
        <h1>Analytics</h1>
        <p className="subtitle">Get insights into your shipping operations and business performance.</p>
      </div>
      
      <div className="analytics-content">
        <div className="tabs-container">
          <div className="tabs-header">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button 
                className={`tab ${activeTab === "shipments" ? "active" : ""}`}
                onClick={() => setActiveTab("shipments")}
              >
                Shipments
              </button>
              <button 
                className={`tab ${activeTab === "revenue" ? "active" : ""}`}
                onClick={() => setActiveTab("revenue")}
              >
                Revenue
              </button>
              <button 
                className={`tab ${activeTab === "customers" ? "active" : ""}`}
                onClick={() => setActiveTab("customers")}
              >
                Customers
              </button>
            </div>
            
            <div className="period-selector">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="year">Last 12 months</option>
                <option value="quarter">Last quarter</option>
                <option value="month">Last month</option>
                <option value="week">Last week</option>
              </select>
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="overview-content">
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <h3>Total Shipments</h3>
                  </div>
                  <div className="metric-value">1,284</div>
                  <p className="metric-change">12% increase from previous period</p>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <h3>Total Revenue</h3>
                  </div>
                  <div className="metric-value">$1.94M</div>
                  <p className="metric-change">8.5% increase from previous period</p>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <h3>Avg Delivery Time</h3>
                  </div>
                  <div className="metric-value">4.7 days</div>
                  <p className="metric-change">0.3 days faster than previous period</p>
                </div>
                <div className="metric-card">
                  <div className="metric-header">
                    <h3>On-Time Delivery</h3>
                  </div>
                  <div className="metric-value">94.2%</div>
                  <p className="metric-change">1.5% increase from previous period</p>
                </div>
              </div>

              <div className="charts-row">
                <div className="chart-card">
                  <h3>Shipments vs Revenue</h3>
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={monthlyData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="shipments" stroke="#8884d8" name="Shipments" />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue ($)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="chart-card">
                  <h3>Transport Mode Distribution</h3>
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={transportModeData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {transportModeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div className="chart-card full-width">
                <h3>Top Customers by Revenue</h3>
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={customerData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      <Bar dataKey="revenue" fill="#4072CC" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "shipments" && (
            <div className="tab-content">
              <div className="chart-card">
                <h3>Shipments Analysis</h3>
                <p className="secondary-text">Detailed shipment metrics will be displayed here.</p>
              </div>
            </div>
          )}
          
          {activeTab === "revenue" && (
            <div className="tab-content">
              <div className="chart-card">
                <h3>Revenue Analysis</h3>
                <p className="secondary-text">Detailed revenue metrics will be displayed here.</p>
              </div>
            </div>
          )}
          
          {activeTab === "customers" && (
            <div className="tab-content">
              <div className="chart-card">
                <h3>Customer Analysis</h3>
                <p className="secondary-text">Detailed customer metrics will be displayed here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      </main>
      </div>
    </div>
  );
};

export default Analytics;