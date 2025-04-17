import { useState } from "react";
import {  
  CalendarToday as CalendarIcon, 
  LocalOffer as TagIcon, 
  LocalShipping as TruckIcon, 
  Person as UserIcon, 
  Place as MapPinIcon, 
  Assignment as ClipboardIcon, 
  SwapVert as ArrowUpDownIcon, 
  Description as FileTextIcon, 
  Warning as AlertTriangleIcon, 
  Search as SearchIcon 
} from "@mui/icons-material";
import { 
  Card, 
  CardHeader, 
  CardContent, 
  Tabs, 
  Tab, 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Divider, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField, 
  InputAdornment,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../Driver/HeaderD";
import Sidebar from "../Driver/SiderbarD";

const DashboardCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[2],
  '&:hover': {
    boxShadow: theme.shadows[4]
  }
}));

const TimelineDot = styled('div')(({ theme, completed }) => ({
  position: 'absolute',
  left: -theme.spacing(3.25),
  top: 0,
  width: theme.spacing(2.5),
  height: theme.spacing(2.5),
  borderRadius: '50%',
  backgroundColor: completed ? theme.palette.primary.main : theme.palette.grey[300],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:after': {
    content: '""',
    display: completed ? 'block' : 'none',
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: '50%',
    backgroundColor: theme.palette.common.white
  }
}));

const TimelineConnector = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(1.5),
  top: 0,
  bottom: 0,
  width: 2,
  backgroundColor: theme.palette.grey[300]
}));

const DocumentItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));

const MetricBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[100]
}));

export default function ShippingDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tabValue, setTabValue] = useState("current");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Sample shipping data - in a real app, this would come from an API
  const currentShipment = {
    id: "SH-12345",
    status: "In Transit",
    priority: "High",
    shipType: "Electronics",
    origin: "Los Angeles Port, CA",
    destination: "Phoenix Distribution Center, AZ",
    eta: "Today, 4:30 PM",
    departureTime: "Today, 8:00 AM",
    weight: "12,500 lbs",
    volume: "1,200 ft³",
    valueInsured: "$780,000",
    specialInstructions: "Fragile items, handle with care. Maintain temperature between 60-75°F.",
    loadingDock: "3B",
    customerInfo: {
      name: "TechVision Enterprises",
      contact: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sjohnson@techvision.example.com",
    },
    documents: [
      { id: 1, name: "Bill of Lading", type: "PDF", date: "Oct 10, 2024" },
      { id: 2, name: "Customs Declaration", type: "PDF", date: "Oct 10, 2024" },
      { id: 3, name: "Packing List", type: "PDF", date: "Oct 10, 2024" },
      { id: 4, name: "Insurance Certificate", type: "PDF", date: "Oct 10, 2024" },
    ],
    timeline: [
      { time: "8:00 AM", event: "Departed from Los Angeles Port", date: "Today", completed: true },
      { time: "9:45 AM", event: "Checkpoint 1: I-10 E Mile 45", date: "Today", completed: true },
      { time: "11:30 AM", event: "Rest stop: Indio, CA", date: "Today", completed: true },
      { time: "1:15 PM", event: "Checkpoint 2: State Line", date: "Today", completed: false },
      { time: "3:30 PM", event: "Checkpoint 3: I-10 E Mile 120", date: "Today", completed: false },
      { time: "4:30 PM", event: "Arrival at Phoenix Distribution Center", date: "Today", completed: false },
    ],
  };

  const shipmentHistory = [
    {
      id: "SH-12344",
      client: "MediHealth Solutions",
      destination: "San Diego Medical Center, CA",
      status: "Delivered",
      date: "Oct 8, 2024",
      type: "Medical Supplies",
    },
    {
      id: "SH-12343",
      client: "Fresh Foods Co.",
      destination: "Las Vegas Distribution Center, NV",
      status: "Delivered",
      date: "Oct 5, 2024",
      type: "Refrigerated Foods",
    },
    {
      id: "SH-12342",
      client: "BuildRight Construction",
      destination: "Sacramento Construction Site, CA",
      status: "Delivered",
      date: "Oct 2, 2024",
      type: "Construction Materials",
    },
    {
      id: "SH-12341",
      client: "TechVision Enterprises",
      destination: "Portland Warehouse, OR",
      status: "Delivered",
      date: "Sep 28, 2024",
      type: "Electronics",
    },
    {
      id: "SH-12340",
      client: "Home Essentials",
      destination: "Seattle Retail Center, WA",
      status: "Delivered",
      date: "Sep 25, 2024",
      type: "Furniture",
    },
  ];

  const filteredHistory = shipmentHistory.filter(
    (shipment) =>
      shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };


  return (

     <div className="Shipping-container">
           <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                
              <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
                <Header toggleSidebar={toggleSidebar} />
                
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Shipping Details
        </Typography>
        <Typography variant="body1" color="text.secondary">
          View information about your current and past shipments
        </Typography>
      </Box>

      <DashboardCard>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Current Shipment" value="current" />
          <Tab label="Shipment History" value="history" />
        </Tabs>
        
        <Divider />
        
        <CardContent>
          {tabValue === "current" && (
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <DashboardCard>
                  <CardHeader
                    title={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                         
                          <Typography variant="h6">Shipment #{currentShipment.id}</Typography>
                        </Box>
                        <Chip 
                          label={currentShipment.status} 
                          color="primary"
                          size="small"
                          sx={{ backgroundColor: 'primary.light', color: 'primary.dark' }}
                        />
                      </Box>
                    }
                  />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">Ship Type</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                              <TagIcon color="primary" fontSize="small" />
                              <Typography variant="body1">{currentShipment.shipType}</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">Priority</Typography>
                            <Typography variant="body1" color="warning.main">{currentShipment.priority}</Typography>
                          </Grid>
                        </Grid>

                        <Box sx={{ mt: 3 }}>
                          <Typography variant="body2" color="text.secondary">Origin</Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                            <MapPinIcon color="primary" fontSize="small" />
                            <Typography variant="body1">{currentShipment.origin}</Typography>
                          </Box>
                        </Box>

                        <Box sx={{ mt: 3 }}>
                          <Typography variant="body2" color="text.secondary">Destination</Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                            <MapPinIcon color="secondary" fontSize="small" />
                            <Typography variant="body1">{currentShipment.destination}</Typography>
                          </Box>
                        </Box>

                        <Grid container spacing={2} sx={{ mt: 3 }}>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">Departure</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                              <CalendarIcon color="primary" fontSize="small" />
                              <Typography variant="body1">{currentShipment.departureTime}</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body2" color="text.secondary">ETA</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                              <CalendarIcon color="secondary" fontSize="small" />
                              <Typography variant="body1">{currentShipment.eta}</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Grid container spacing={2}>
                          <Grid item xs={4}>
                            <MetricBox>
                              <Typography variant="body2" color="text.secondary">Weight</Typography>
                              <Typography variant="body1">{currentShipment.weight}</Typography>
                            </MetricBox>
                          </Grid>
                          <Grid item xs={4}>
                            <MetricBox>
                              <Typography variant="body2" color="text.secondary">Volume</Typography>
                              <Typography variant="body1">{currentShipment.volume}</Typography>
                            </MetricBox>
                          </Grid>
                          <Grid item xs={4}>
                            <MetricBox>
                              <Typography variant="body2" color="text.secondary">Value</Typography>
                              <Typography variant="body1">{currentShipment.valueInsured}</Typography>
                            </MetricBox>
                          </Grid>
                        </Grid>

                        <Box sx={{ mt: 3 }}>
                          <Typography variant="body2" color="text.secondary" gutterBottom>Loading Location</Typography>
                          <MetricBox>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <TruckIcon color="primary" />
                              <Typography variant="body1">Dock {currentShipment.loadingDock}</Typography>
                            </Box>
                          </MetricBox>
                        </Box>

                        <Box sx={{ mt: 3 }}>
                          <Typography variant="body2" color="text.secondary" gutterBottom>Special Instructions</Typography>
                          <MetricBox sx={{ minHeight: 80 }}>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                              <AlertTriangleIcon color="warning" />
                              <Typography>{currentShipment.specialInstructions}</Typography>
                            </Box>
                          </MetricBox>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </DashboardCard>

                <DashboardCard sx={{ mt: 3 }}>
                  <CardHeader title="Shipment Timeline" />
                  <CardContent>
                    <Box sx={{ position: 'relative', pl: 4 }}>
                      <TimelineConnector />
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {currentShipment.timeline.map((item, index) => (
                          <Box key={index} sx={{ position: 'relative' }}>
                            <TimelineDot completed={item.completed} />
                            <Box>
                              <Typography variant="body1" fontWeight="medium">{item.event}</Typography>
                              <Typography variant="body2" color="text.secondary">{item.date}, {item.time}</Typography>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </DashboardCard>
              </Grid>

              <Grid item xs={12} lg={4}>
                <DashboardCard>
                  <CardHeader title="Customer Information" />
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <Box>
                        <Typography variant="body2" color="text.secondary">Company</Typography>
                        <Typography variant="body1">{currentShipment.customerInfo.name}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">Contact Person</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                          <UserIcon color="primary" fontSize="small" />
                          <Typography variant="body1">{currentShipment.customerInfo.contact}</Typography>
                        </Box>
                      </Box>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Phone</Typography>
                          <Typography variant="body1">{currentShipment.customerInfo.phone}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Email</Typography>
                          <Typography variant="body1" noWrap>{currentShipment.customerInfo.email}</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </DashboardCard>

                <DashboardCard sx={{ mt: 3 }}>
                  <CardHeader title="Required Documents" />
                  <CardContent>
                    <List>
                      {currentShipment.documents.map((doc) => (
                        <DocumentItem key={doc.id}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <FileTextIcon color="primary" />
                            <Box>
                              <Typography variant="body1">{doc.name}</Typography>
                              <Typography variant="caption" color="text.secondary">{doc.date} • {doc.type}</Typography>
                            </Box>
                          </Box>
                        </DocumentItem>
                      ))}
                    </List>
                  </CardContent>
                </DashboardCard>
              </Grid>
            </Grid>
          )}

          {tabValue === "history" && (
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">Previous Shipments</Typography>
                <TextField
                  placeholder="Search shipments..."
                  size="small"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ width: 300 }}
                />
              </Box>
              
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Client</TableCell>
                      <TableCell>Destination</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredHistory.map((shipment) => (
                      <TableRow 
                        key={shipment.id} 
                        hover
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell>{shipment.id}</TableCell>
                        <TableCell>{shipment.client}</TableCell>
                        <TableCell>{shipment.destination}</TableCell>
                        <TableCell>{shipment.type}</TableCell>
                        <TableCell>{shipment.date}</TableCell>
                        <TableCell>
                          <Chip 
                            label={shipment.status} 
                            color="success"
                            size="small"
                            sx={{ backgroundColor: 'success.light', color: 'success.dark' }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </CardContent>
      </DashboardCard>
    </Box>
    </div>
    </div>
  );
}