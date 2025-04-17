import { useState } from "react";
import {
  Speed,
  LocalGasStation,
  CalendarToday,
  AccessTime,
  Build,
  Description,
  Warning,
} from "@mui/icons-material";
import {
  Paper,
  Typography,
  LinearProgress,
  Tabs,
  Tab,
  Box,
  Chip,
  Grid,
  Divider,
} from "@mui/material";
import Header from "../Driver/HeaderD";
import Sidebar from "../Driver/SiderbarD";
import "./TruckDetails.css";

export default function TruckDetails() {
  // Sample truck data - in a real app, this would come from an API
  const truckData = {
    truckId: "TRK-5678",
    model: "Freightliner Cascadia 2023",
    licensePlate: "TX-45678",
    status: "Active",
    vinNumber: "1FUJA6CV77LY45678",
    lastMaintenance: "Oct 10, 2024",
    nextMaintenanceDue: "Nov 15, 2024",
    fuelLevel: 75,
    fuelCapacity: "150 gallons",
    mileage: 75980,
    engineHours: 1245,
    tireCondition: "Good",
    oilLevel: "Normal",
    refrigerationTemp: "34°F",
    currentIssues: [
      {
        id: 1,
        title: "Windshield wipers require replacement",
        severity: "Low",
        reportedOn: "Oct 5, 2024",
      },
    ],
    maintenanceHistory: [
      {
        id: 1,
        type: "Regular Maintenance",
        date: "Oct 10, 2024",
        mileage: 75000,
        description: "Oil change, filters replaced, brakes inspected",
        technician: "Mike Johnson",
      },
      {
        id: 2,
        type: "Tire Replacement",
        date: "Sep 15, 2024",
        mileage: 72500,
        description: "Rear tires replaced",
        technician: "Tony Garcia",
      },
      {
        id: 3,
        type: "Emergency Repair",
        date: "Aug 2, 2024",
        mileage: 70000,
        description: "Alternator replacement",
        technician: "Sarah Williams",
      },
    ],
  };

  const [tabValue, setTabValue] = useState("daily");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

   const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

  return (
    <div className="truck-details-container">
       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                  
                <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
                  <Header toggleSidebar={toggleSidebar} />
      <div className="header">
        <Typography variant="h5" className="title">
          My Truck
        </Typography>
        <Typography variant="body2" className="subtitle">
          View detailed information about your assigned vehicle
        </Typography>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Paper className="vehicle-info-card">
            <Box className="card-header">
              <Typography variant="h6">Vehicle Information</Typography>
              <Chip
                label={truckData.status}
                className="status-chip"
                color="success"
                size="small"
              />
            </Box>
            <Box className="card-content">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box className="info-section">
                    <Typography variant="h6">{truckData.model}</Typography>
                    <Typography className="info-subtext">
                      ID: {truckData.truckId}
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography className="info-label">
                        License Plate
                      </Typography>
                      <Typography className="info-value">
                        {truckData.licensePlate}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className="info-label">VIN</Typography>
                      <Typography className="info-value">
                        {truckData.vinNumber}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className="info-label">Mileage</Typography>
                      <Typography className="info-value">
                        {truckData.mileage.toLocaleString()} miles
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className="info-label">
                        Engine Hours
                      </Typography>
                      <Typography className="info-value">
                        {truckData.engineHours} hrs
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography className="info-label">
                        Last Maintenance
                      </Typography>
                      <Box className="info-with-icon">
                        <CalendarToday className="info-icon purple" />
                        <Typography className="info-value">
                          {truckData.lastMaintenance}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className="info-label">Next Due</Typography>
                      <Box className="info-with-icon">
                        <AccessTime className="info-icon orange" />
                        <Typography className="info-value">
                          {truckData.nextMaintenanceDue}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box className="fuel-section">
                    <Typography className="info-label">Fuel Level</Typography>
                    <Box className="fuel-progress">
                      <LocalGasStation className="info-icon purple" />
                      <LinearProgress
                        variant="determinate"
                        value={truckData.fuelLevel}
                        className="progress-bar"
                      />
                      <Typography className="fuel-value">
                        {truckData.fuelLevel}%
                      </Typography>
                    </Box>
                    <Typography className="info-subtext">
                      Capacity: {truckData.fuelCapacity}
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Paper className="status-box">
                        <Box className="status-header">
                          <Build className="status-icon" />
                          <Typography className="status-label">Oil</Typography>
                        </Box>
                        <Typography className="status-value">
                          {truckData.oilLevel}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={4}>
                      <Paper className="status-box">
                        <Box className="status-header">
                          <Speed className="status-icon" />
                          <Typography className="status-label">Tires</Typography>
                        </Box>
                        <Typography className="status-value">
                          {truckData.tireCondition}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={4}>
                      <Paper className="status-box">
                        <Box className="status-header">

                          <Typography className="status-label">Temp</Typography>
                        </Box>
                        <Typography className="status-value">
                          {truckData.refrigerationTemp}
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>

          <Paper className="maintenance-history-card">
            <Box className="card-header">
              <Typography variant="h6">Maintenance History</Typography>
            </Box>
            <Box className="card-content">
              {truckData.maintenanceHistory.map((item) => (
                <Paper key={item.id} className="history-item">
                  <Box className="history-header">
                    <Box>
                      <Typography className="history-type">
                        {item.type}
                      </Typography>
                      <Box className="history-meta">
                        <CalendarToday className="meta-icon" />
                        <Typography className="meta-text">
                          {item.date}
                        </Typography>
                        <Typography className="meta-divider">•</Typography>
                        <Typography className="meta-text">
                          {item.mileage.toLocaleString()} miles
                        </Typography>
                      </Box>
                    </Box>
                    <Chip
                      label={item.technician}
                      className="technician-chip"
                      size="small"
                    />
                  </Box>
                  <Typography className="history-description">
                    {item.description}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper className="issues-card">
            <Box className="card-header">
              <Typography variant="h6">Current Issues</Typography>
            </Box>
            <Box className="card-content">
              {truckData.currentIssues.length > 0 ? (
                truckData.currentIssues.map((issue) => (
                  <Box key={issue.id} className="issue-item">
                    <Warning className="issue-icon" />
                    <Box>
                      <Typography className="issue-title">
                        {issue.title}
                      </Typography>
                      <Box className="issue-meta">
                        <Chip
                          label={issue.severity}
                          className="severity-chip"
                          size="small"
                        />
                        <Typography className="issue-reported">
                          Reported on {issue.reportedOn}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))
              ) : (
                <Box className="no-issues">
                  <Description className="no-issues-icon" />
                  <Typography>No current issues reported</Typography>
                </Box>
              )}
            </Box>
          </Paper>

          <Paper className="tips-card">
            <Box className="card-header">
              <Typography variant="h6">Maintenance Tips</Typography>
            </Box>
            <Box className="card-content">
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                className="tips-tabs"
                centered
              >
                <Tab label="Daily" value="daily" />
                <Tab label="Weekly" value="weekly" />
                <Tab label="Monthly" value="monthly" />
              </Tabs>
              {tabValue === "daily" && (
                <Box className="tips-content">
                  <Box className="tip-item">
                    <Box className="tip-number">1</Box>
                    <Box>
                      <Typography className="tip-title">
                        Check tire pressure and condition
                      </Typography>
                      <Typography className="tip-description">
                        Inspect for proper inflation and any visible damage
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="tip-item">
                    <Box className="tip-number">2</Box>
                    <Box>
                      <Typography className="tip-title">
                        Inspect fluid levels
                      </Typography>
                      <Typography className="tip-description">
                        Check oil, coolant, and windshield washer fluid
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="tip-item">
                    <Box className="tip-number">3</Box>
                    <Box>
                      <Typography className="tip-title">
                        Test lights and signals
                      </Typography>
                      <Typography className="tip-description">
                        Ensure all exterior lights are working properly
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}
              {tabValue === "weekly" && (
                <Box className="tips-content">
                  <Box className="tip-item">
                    <Box className="tip-number">1</Box>
                    <Box>
                      <Typography className="tip-title">
                        Check brake system
                      </Typography>
                      <Typography className="tip-description">
                        Test operation and check pad wear
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="tip-item">
                    <Box className="tip-number">2</Box>
                    <Box>
                      <Typography className="tip-title">
                        Inspect belts and hoses
                      </Typography>
                      <Typography className="tip-description">
                        Look for cracks, leaks or wear
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}
              {tabValue === "monthly" && (
                <Box className="tips-content">
                  <Box className="tip-item">
                    <Box className="tip-number">1</Box>
                    <Box>
                      <Typography className="tip-title">
                        Check all fluid levels thoroughly
                      </Typography>
                      <Typography className="tip-description">
                        Including transmission and differential fluid
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="tip-item">
                    <Box className="tip-number">2</Box>
                    <Box>
                      <Typography className="tip-title">
                        Test battery and charging system
                      </Typography>
                      <Typography className="tip-description">
                        Ensure proper operation and clean terminals
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}