import React from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Badge,
  Divider,
  Chip,
  Grid,
  Paper,
  LinearProgress,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@mui/material";
import {
  Person as PersonIcon,
  Lock as LockIcon,
  Notifications as NotificationsIcon,
  CreditCard as CreditCardIcon,
  VpnKey as VpnKeyIcon,
  Language as LanguageIcon,
  Check as CheckIcon,
  MoreVert as MoreVertIcon,
  CloudDownload as CloudDownloadIcon,
  Print as PrintIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  ContentCopy as ContentCopyIcon,
  Visibility as VisibilityIcon,
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Computer as SystemIcon
} from "@mui/icons-material";
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
import { useState } from "react";


const Settings = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = React.useState("general");
  const [timezone, setTimezone] = React.useState("america_new_york");
  const [language, setLanguage] = React.useState("en");
  const [dateFormat, setDateFormat] = React.useState("mdy");
  const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(false);
  const [compactMode, setCompactMode] = React.useState(false);
  const [welcomeScreen, setWelcomeScreen] = React.useState(true);
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [smsNotifications, setSmsNotifications] = React.useState(false);
  const [browserNotifications, setBrowserNotifications] = React.useState(true);
  const [shipmentUpdates, setShipmentUpdates] = React.useState(true);
  const [fleetAlerts, setFleetAlerts] = React.useState(true);
  const [customerActivity, setCustomerActivity] = React.useState(true);
  const [systemUpdates, setSystemUpdates] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);
  const [themeMode, setThemeMode] = React.useState("system");
  const [sidebarOpen, setSidebarOpen] = useState(true);


  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleDateFormatChange = (event) => {
    setDateFormat(event.target.value);
  };

  const openPositions = [
    { 
      id: 1, 
      position: "Fleet Manager", 
      department: "Operations", 
      location: "New York", 
      experience: "3+ years",
      remote: false,
      applicants: 12,
      postDate: "2025-03-20",
    },
    { 
      id: 2, 
      position: "Logistics Coordinator", 
      department: "Supply Chain", 
      location: "Chicago", 
      experience: "2+ years",
      remote: true,
      applicants: 8,
      postDate: "2025-04-01",
    },
    { 
      id: 3, 
      position: "Dispatch Specialist", 
      department: "Operations", 
      location: "Remote", 
      experience: "1+ years",
      remote: true,
      applicants: 5,
      postDate: "2025-04-05",
    }
  ];


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="Settings-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          
          <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
            <Header toggleSidebar={toggleSidebar} />
            <main className="main-content-inner">
    
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Settings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your account settings and preferences.
        </Typography>
      </Box>

      <Paper elevation={0} sx={{ mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            "& .MuiTabs-indicator": {
              height: 3
            }
          }}
        >
          <Tab
            value="general"
            label="General"
            icon={<PersonIcon />}
            iconPosition="start"
            sx={{ minHeight: 48 }}
          />
          <Tab
            value="security"
            label="Security"
            icon={<LockIcon />}
            iconPosition="start"
            sx={{ minHeight: 48 }}
          />
          <Tab
            value="notifications"
            label="Notifications"
            icon={<NotificationsIcon />}
            iconPosition="start"
            sx={{ minHeight: 48 }}
          />
          <Tab
            value="billing"
            label="Billing"
            icon={<CreditCardIcon />}
            iconPosition="start"
            sx={{ minHeight: 48 }}
          />
          <Tab
            value="api"
            label="API"
            icon={<VpnKeyIcon />}
            iconPosition="start"
            sx={{ minHeight: 48 }}
          />
          <Tab
            value="appearance"
            label="Appearance"
            icon={<LanguageIcon />}
            iconPosition="start"
            sx={{ minHeight: 48 }}
          />
        </Tabs>
      </Paper>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
        <Box sx={{ width: { md: 240 }, flexShrink: 0 }}>
          {/* Sidebar content if needed */}
        </Box>
        
        <Box sx={{ flexGrow: 1 }}>
          {/* General Tab */}
          {tabValue === "general" && (
            <>
              <Card sx={{ mb: 3 }}>
                <CardHeader title="Profile" subheader="Manage your public profile information" />
                <CardContent>
                  <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 3 }}>
                    <Avatar
                      src="https://github.com/shadcn.png"
                      sx={{ width: 80, height: 80 }}
                    >
                      JD
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        Profile Picture
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button variant="outlined" size="small">
                          Change
                        </Button>
                        <Button variant="outlined" size="small" color="error">
                          Remove
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        defaultValue="John Doe"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Job Title"
                        defaultValue="Fleet Manager"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        defaultValue="john.doe@company.com"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        defaultValue="+1 (555) 123-4567"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Bio"
                    multiline
                    rows={4}
                    defaultValue="Fleet manager with 10+ years of experience in logistics and transport operations."
                    margin="normal"
                  />
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                  <Button variant="contained">Save Changes</Button>
                </CardActions>
              </Card>

              <Card>
                <CardHeader title="Company Information" subheader="Manage your company details and preferences" />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        defaultValue="Cargo Control Inc."
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth margin="normal">
                        <InputLabel>Timezone</InputLabel>
                        <Select
                          value={timezone}
                          onChange={handleTimezoneChange}
                          label="Timezone"
                        >
                          <MenuItem value="america_new_york">America/New York (UTC-04:00)</MenuItem>
                          <MenuItem value="america_chicago">America/Chicago (UTC-05:00)</MenuItem>
                          <MenuItem value="america_los_angeles">America/Los Angeles (UTC-07:00)</MenuItem>
                          <MenuItem value="europe_london">Europe/London (UTC+01:00)</MenuItem>
                          <MenuItem value="asia_tokyo">Asia/Tokyo (UTC+09:00)</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Address"
                        defaultValue="123 Logistics Blvd"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="City"
                        defaultValue="Chicago"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="State"
                        defaultValue="IL"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="ZIP Code"
                        defaultValue="60606"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                  <Button variant="contained">Save Changes</Button>
                </CardActions>
              </Card>
            </>
          )}

          {/* Security Tab */}
          {tabValue === "security" && (
            <>
              <Card sx={{ mb: 3 }}>
                <CardHeader
                  title="Password"
                  subheader="Change your password to keep your account secure"
                />
                <CardContent>
                  <TextField
                    fullWidth
                    label="Current Password"
                    type="password"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="New Password"
                    type="password"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Confirm New Password"
                    type="password"
                    margin="normal"
                  />
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                  <Button variant="contained">Update Password</Button>
                </CardActions>
              </Card>

              <Card sx={{ mb: 3 }}>
                <CardHeader
                  title="Two-Factor Authentication"
                  subheader="Add additional security to your account"
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 1
                    }}
                  >
                    <Box>
                      <Typography variant="body1" component="div">
                        Two-Factor Authentication
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Enhance your account security by enabling two-factor authentication.
                      </Typography>
                    </Box>
                    <Switch
                      checked={twoFactorEnabled}
                      onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    />
                  </Box>
                </CardContent>
              </Card>

              <Card>
                <CardHeader
                  title="Security Logs"
                  subheader="Recent account activities and security events"
                />
                <CardContent>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          justifyContent: "space-between",
                          alignItems: { xs: "flex-start", sm: "center" }
                        }}
                      >
                        <Box>
                          <Typography fontWeight="medium">Password Changed</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Your password was changed successfully.
                          </Typography>
                        </Box>
                        <Chip label="Mar 28, 2025" variant="outlined" sx={{ mt: { xs: 1, sm: 0 } }} />
                      </Box>
                    </Paper>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          justifyContent: "space-between",
                          alignItems: { xs: "flex-start", sm: "center" }
                        }}
                      >
                        <Box>
                          <Typography fontWeight="medium">Login from new device</Typography>
                          <Typography variant="body2" color="text.secondary">
                            New login detected from Chicago, IL.
                          </Typography>
                        </Box>
                        <Chip label="Mar 25, 2025" variant="outlined" sx={{ mt: { xs: 1, sm: 0 } }} />
                      </Box>
                    </Paper>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          justifyContent: "space-between",
                          alignItems: { xs: "flex-start", sm: "center" }
                        }}
                      >
                        <Box>
                          <Typography fontWeight="medium">Email Changed</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Your email address was updated.
                          </Typography>
                        </Box>
                        <Chip label="Mar 20, 2025" variant="outlined" sx={{ mt: { xs: 1, sm: 0 } }} />
                      </Box>
                    </Paper>
                  </Box>
                </CardContent>
              </Card>
            </>
          )}

          {/* Notifications Tab */}
          {tabValue === "notifications" && (
            <>
              <Card sx={{ mb: 3 }}>
                <CardHeader
                  title="Notification Preferences"
                  subheader="Choose how you receive notifications"
                />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Email Notifications"
                        secondary="Receive email notifications for important updates"
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          edge="end"
                          checked={emailNotifications}
                          onChange={() => setEmailNotifications(!emailNotifications)}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="SMS Notifications"
                        secondary="Receive text messages for urgent alerts"
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          edge="end"
                          checked={smsNotifications}
                          onChange={() => setSmsNotifications(!smsNotifications)}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Browser Notifications"
                        secondary="Receive notifications in your browser"
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          edge="end"
                          checked={browserNotifications}
                          onChange={() => setBrowserNotifications(!browserNotifications)}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              <Card>
                <CardHeader
                  title="Notification Types"
                  subheader="Select the types of notifications you want to receive"
                />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Shipment Updates"
                        secondary="Notifications about status changes of shipments"
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          edge="end"
                          checked={shipmentUpdates}
                          onChange={() => setShipmentUpdates(!shipmentUpdates)}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Fleet Alerts"
                        secondary="Notifications about vehicle maintenance and issues"
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          edge="end"
                          checked={fleetAlerts}
                          onChange={() => setFleetAlerts(!fleetAlerts)}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Customer Activity"
                        secondary="Notifications about customer actions and requests"
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          edge="end"
                          checked={customerActivity}
                          onChange={() => setCustomerActivity(!customerActivity)}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="System Updates"
                        secondary="Notifications about system maintenance and updates"
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          edge="end"
                          checked={systemUpdates}
                          onChange={() => setSystemUpdates(!systemUpdates)}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Marketing"
                        secondary="Promotional materials and company announcements"
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          edge="end"
                          checked={marketing}
                          onChange={() => setMarketing(!marketing)}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                  <Button variant="contained">Save Preferences</Button>
                </CardActions>
              </Card>
            </>
          )}

          {/* Billing Tab */}
          {tabValue === "billing" && (
            <>
              <Card sx={{ mb: 3 }}>
                <CardHeader
                  title="Current Plan"
                  subheader="Your current subscription plan and usage"
                />
                <CardContent>
                  <Paper variant="outlined" sx={{ p: 3, mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2
                      }}
                    >
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Enterprise Plan
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Unlimited features for your team
                        </Typography>
                      </Box>
                      <Chip label="Active" color="success" />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1
                        }}
                      >
                        <Typography variant="body2">Price</Typography>
                        <Typography variant="body2" fontWeight="medium">
                          $499/month
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1
                        }}
                      >
                        <Typography variant="body2">Billing Cycle</Typography>
                        <Typography variant="body2" fontWeight="medium">
                          Monthly
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1
                        }}
                      >
                        <Typography variant="body2">Next Renewal</Typography>
                        <Typography variant="body2" fontWeight="medium">
                          May 1, 2025
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button variant="outlined">Change Plan</Button>
                      <Button variant="outlined" color="error">
                        Cancel Subscription
                      </Button>
                    </Box>
                  </Paper>
                </CardContent>
              </Card>

              <Card sx={{ mb: 3 }}>
                <CardHeader
                  title="Payment Methods"
                  subheader="Manage your payment information"
                />
                <CardContent>
                  <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 40,
                            bgcolor: "grey.100",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            color: "grey.800"
                          }}
                        >
                          VISA
                        </Box>
                        <Box>
                          <Typography fontWeight="medium">Visa ending in 4242</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Expires 12/2028
                          </Typography>
                        </Box>
                      </Box>
                      <Chip label="Default" size="small" />
                    </Box>
                  </Paper>
                  <Button variant="outlined" fullWidth startIcon={<AddIcon />}>
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader
                  title="Billing History"
                  subheader="View your past invoices and payment history"
                />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Invoice #INV-2025-0004"
                        secondary="Apr 1, 2025 • $499.00"
                      />
                      <ListItemSecondaryAction sx={{ display: "flex", gap: 1 }}>
                        <Chip label="Paid" variant="outlined" size="small" />
                        <Button variant="outlined" size="small" startIcon={<CloudDownloadIcon />}>
                          Download
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Invoice #INV-2025-0003"
                        secondary="Mar 1, 2025 • $499.00"
                      />
                      <ListItemSecondaryAction sx={{ display: "flex", gap: 1 }}>
                        <Chip label="Paid" variant="outlined" size="small" />
                        <Button variant="outlined" size="small" startIcon={<CloudDownloadIcon />}>
                          Download
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText
                        primary="Invoice #INV-2025-0002"
                        secondary="Feb 1, 2025 • $499.00"
                      />
                      <ListItemSecondaryAction sx={{ display: "flex", gap: 1 }}>
                        <Chip label="Paid" variant="outlined" size="small" />
                        <Button variant="outlined" size="small" startIcon={<CloudDownloadIcon />}>
                          Download
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </>
          )}

          {/* API Tab */}
          {tabValue === "api" && (
            <>
              <Card sx={{ mb: 3 }}>
                <CardHeader
                  title="API Keys"
                  subheader="Manage API keys to access the system programmatically"
                />
                <CardContent>
                  <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", sm: "center" },
                        gap: 2
                      }}
                    >
                      <Box>
                        <Typography fontWeight="medium">Production Key</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          Created on Jan 15, 2025
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                          <TextField
                            type="password"
                            value="•••••••••••••••••••••••••••••••"
                            size="small"
                            sx={{ width: 300 }}
                            InputProps={{
                              readOnly: true
                            }}
                          />
                          <Button variant="outlined" size="small" startIcon={<VisibilityIcon />}>
                            Show
                          </Button>
                          <Button variant="outlined" size="small" startIcon={<ContentCopyIcon />}>
                            Copy
                          </Button>
                        </Box>
                      </Box>
                      <Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>
                        Revoke
                      </Button>
                    </Box>
                  </Paper>
                  <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", sm: "center" },
                        gap: 2
                      }}
                    >
                      <Box>
                        <Typography fontWeight="medium">Test Key</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          Created on Feb 20, 2025
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                          <TextField
                            type="password"
                            value="•••••••••••••••••••••••••••••••"
                            size="small"
                            sx={{ width: 300 }}
                            InputProps={{
                              readOnly: true
                            }}
                          />
                          <Button variant="outlined" size="small" startIcon={<VisibilityIcon />}>
                            Show
                          </Button>
                          <Button variant="outlined" size="small" startIcon={<ContentCopyIcon />}>
                            Copy
                          </Button>
                        </Box>
                      </Box>
                      <Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>
                        Revoke
                      </Button>
                    </Box>
                  </Paper>
                  <Button variant="contained" startIcon={<AddIcon />}>
                    Generate New API Key
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader
                  title="API Usage"
                  subheader="Monitor your API request usage and limits"
                />
                <CardContent>
                  <Box sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1
                      }}
                    >
                      <Typography variant="body2" fontWeight="medium">
                        API Requests (This Month)
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        8,532 / 50,000
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={17}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1
                      }}
                    >
                      <Typography variant="body2" fontWeight="medium">
                        Webhook Requests (This Month)
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        1,245 / 10,000
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={12}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </>
          )}

          {/* Appearance Tab */}
          {tabValue === "appearance" && (
            <Card>
              <CardHeader
                title="Appearance"
                subheader="Customize how the dashboard looks and feels"
              />
              <CardContent>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" gutterBottom>
                    Theme
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Paper
                        variant={themeMode === "system" ? "elevation" : "outlined"}
                        elevation={themeMode === "system" ? 3 : 0}
                        onClick={() => setThemeMode("system")}
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          cursor: "pointer",
                          borderColor: themeMode === "system" ? "primary.main" : "divider",
                          borderWidth: themeMode === "system" ? 2 : 1
                        }}
                      >
                        <SystemIcon color={themeMode === "system" ? "primary" : "action"} />
                        <Typography>System</Typography>
                        {themeMode === "system" && <CheckIcon color="primary" sx={{ ml: "auto" }} />}
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Paper
                        variant={themeMode === "dark" ? "elevation" : "outlined"}
                        elevation={themeMode === "dark" ? 3 : 0}
                        onClick={() => setThemeMode("dark")}
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          cursor: "pointer",
                          borderColor: themeMode === "dark" ? "primary.main" : "divider",
                          borderWidth: themeMode === "dark" ? 2 : 1
                        }}
                      >
                        <DarkIcon color={themeMode === "dark" ? "primary" : "action"} />
                        <Typography>Dark</Typography>
                        {themeMode === "dark" && <CheckIcon color="primary" sx={{ ml: "auto" }} />}
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Paper
                        variant={themeMode === "light" ? "elevation" : "outlined"}
                        elevation={themeMode === "light" ? 3 : 0}
                        onClick={() => setThemeMode("light")}
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          cursor: "pointer",
                          borderColor: themeMode === "light" ? "primary.main" : "divider",
                          borderWidth: themeMode === "light" ? 2 : 1
                        }}
                      >
                        <LightIcon color={themeMode === "light" ? "primary" : "action"} />
                        <Typography>Light</Typography>
                        {themeMode === "light" && <CheckIcon color="primary" sx={{ ml: "auto" }} />}
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Language</InputLabel>
                  <Select
                    value={language}
                    onChange={handleLanguageChange}
                    label="Language"
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                    <MenuItem value="de">German</MenuItem>
                    <MenuItem value="zh">Chinese</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Date Format</InputLabel>
                  <Select
                    value={dateFormat}
                    onChange={handleDateFormatChange}
                    label="Date Format"
                  >
                    <MenuItem value="mdy">MM/DD/YYYY</MenuItem>
                    <MenuItem value="dmy">DD/MM/YYYY</MenuItem>
                    <MenuItem value="ymd">YYYY/MM/DD</MenuItem>
                  </Select>
                </FormControl>

                <Box sx={{ mb: 2 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={compactMode}
                        onChange={() => setCompactMode(!compactMode)}
                      />
                    }
                    label={
                      <Box>
                        <Typography>Compact Mode</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Make the dashboard more compact to show more information.
                        </Typography>
                      </Box>
                    }
                    sx={{ alignItems: "flex-start" }}
                  />
                </Box>

                <FormControlLabel
                  control={
                    <Switch
                      checked={welcomeScreen}
                      onChange={() => setWelcomeScreen(!welcomeScreen)}
                    />
                  }
                  label={
                    <Box>
                      <Typography>Show Welcome Screen</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Show the welcome screen when you log in.
                      </Typography>
                    </Box>
                  }
                  sx={{ alignItems: "flex-start" }}
                />
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                <Button variant="contained">Save Preferences</Button>
              </CardActions>
            </Card>
          )}
        </Box>
      </Box>
     </Box>
     </main>
    </div>
    </div>
    
  );
};

export default Settings;