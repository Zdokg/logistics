import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@mui/material'; // Replaced with MUI Avatar
import {
  Tabs,
  Tab,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Chip,
} from '@mui/material';
import { toast } from 'sonner';
import './Profile.css';
import Header from "../Driver/HeaderD";
import Sidebar from "../Driver/SiderbarD";

export default function Profile() {
  const [tabIndex, setTabIndex] = useState(0);
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Trucking Lane, Roadville, CA 94123',
    licenseNumber: 'CDL-123456789',
    licenseExpiry: '12/31/2025',
    joinDate: 'Jan 15, 2022',
    tripsCompleted: 342,
    milesLogged: 78450,
    preferredRoutes: ['West Coast', 'Midwest', 'Southern Routes'],
    certifications: ['Hazardous Materials', 'Tanker', 'Double/Triple Trailers'],
  });

  const handleSaveChanges = () => {
    toast.success('Profile updated successfully');
  };
   const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

  return (
    <div className="profile-container">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                    
                  <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
                    <Header toggleSidebar={toggleSidebar} />
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account information and preferences</p>
      </div>

      <div className="profile-grid">
        <div className="profile-main">
          <Tabs value={tabIndex} onChange={(_, newValue) => setTabIndex(newValue)}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tab label="Personal Info" />
              <Tab label="License & Certifications" />
              <Tab label="Preferences" />
            </Box>
          </Tabs>

          {tabIndex === 0 && (
            <Card className="profile-card">
              <CardHeader title="Personal Information" subheader="Update your personal details" />
              <CardContent>
                <div className="form-grid">
                  <TextField label="Full Name" defaultValue={user.name} fullWidth />
                  <TextField label="Email" type="email" defaultValue={user.email} fullWidth />
                  <TextField label="Phone Number" defaultValue={user.phone} fullWidth />
                  <TextField label="Address" defaultValue={user.address} fullWidth />
                </div>
                <div className="button-end">
                  <Button variant="contained" onClick={handleSaveChanges}>
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {tabIndex === 1 && (
            <Card className="profile-card">
              <CardHeader title="License Information" subheader="Your commercial driving license details" />
              <CardContent>
                <div className="form-grid">
                  <TextField label="License Number" defaultValue={user.licenseNumber} fullWidth />
                  <TextField label="Expiration Date" defaultValue={user.licenseExpiry} fullWidth />
                </div>
                <div className="chip-list">
                  {user.certifications.map((cert, i) => (
                    <Chip key={i} label={cert} className="chip-cert" />
                  ))}
                </div>
                <div className="button-end">
                  <Button variant="contained" onClick={handleSaveChanges}>
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {tabIndex === 2 && (
            <Card className="profile-card">
              <CardHeader title="Preferences" subheader="Customize your driving preferences" />
              <CardContent>
                <div className="chip-list">
                  {user.preferredRoutes.map((route, i) => (
                    <Chip key={i} label={route} className="chip-route" />
                  ))}
                </div>
                <div className="notification-options">
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Email Notifications" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="SMS Notifications" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="In-App Notifications" />
                </div>
                <div className="button-end">
                  <Button variant="contained" onClick={handleSaveChanges}>
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="profile-sidebar">
          <Card className="profile-card">
            <CardHeader title="Driver Profile" />
            <CardContent className="sidebar-card-content">
              <Avatar src="/avatar.png" alt={user.name} sx={{ width: 96, height: 96, mb: 2 }} />
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Professional Driver
              </Typography>
              <Button variant="outlined" fullWidth sx={{ my: 2 }}>
                Change Photo
              </Button>
              <div className="driver-stats">
                <div>
                  <Typography variant="body2" color="text.secondary">
                    Member Since
                  </Typography>
                  <Typography variant="body1">{user.joinDate}</Typography>
                </div>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    Trips Completed
                  </Typography>
                  <Typography variant="body1">{user.tripsCompleted}</Typography>
                </div>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    Miles Logged
                  </Typography>
                  <Typography variant="body1">{user.milesLogged.toLocaleString()}</Typography>
                </div>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    Rating
                  </Typography>
                  <Typography variant="body1">4.9/5.0</Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="profile-card">
            <CardHeader title="Account Security" />
            <CardContent className="sidebar-card-content">
              <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                Change Password
              </Button>
              <Button variant="outlined" fullWidth>
                Enable Two-Factor Auth
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
}
