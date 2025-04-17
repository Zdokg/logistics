import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  IconButton,
  Badge
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Package, Filter, Plus, FileDown, Printer } from "lucide-react";
import Sidebar from "../Dashboard/Sidebar";
import Header from '../Dashboard/Header';
import "./Shipments.css";





const shipments = [
  {
    id: "SH-3852",
    name: "Electronics Cargo",
    origin: "Shanghai, CN",
    destination: "New York, US",
    date: "Apr 10, 2025",
    status: "completed",
    customer: "TechGlobal Inc."
  },
  {
    id: "SH-4251",
    name: "Medical Supplies",
    origin: "Berlin, DE",
    destination: "Boston, US",
    date: "Apr 12, 2025",
    status: "delayed",
    customer: "MedSupply Corp"
  },
  {
    id: "SH-8742",
    name: "Furniture Delivery",
    origin: "Bangkok, TH",
    destination: "Chicago, US",
    date: "Apr 15, 2025",
    status: "in-transit",
    customer: "Modern Living"
  },
  {
    id: "SH-9932",
    name: "Auto Parts",
    origin: "Detroit, US",
    destination: "Los Angeles, US",
    date: "Apr 18, 2025",
    status: "scheduled",
    customer: "AutoZone"
  },
  {
    id: "SH-1077",
    name: "Food Products",
    origin: "Madrid, ES",
    destination: "London, UK",
    date: "Apr 20, 2025",
    status: "scheduled",
    customer: "FreshFoods Ltd"
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "success";
    case "in-transit":
      return "info";
    case "delayed":
      return "error";
    case "scheduled":
      return "warning";
    default:
      return "default";
  }
};

const formatStatusText = (status) => {
  switch (status) {
    case "in-transit":
      return "In Transit";
    case "scheduled":
      return "Scheduled";
    default:
      return status.charAt(0).toUpperCase() + status.slice(1);
  }
};

const Shipments = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);
const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};


  return (

    <div className="shipments-container">
    <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <Header toggleSidebar={toggleSidebar} />
        
      <main className="main-content-inner">
       <div className="shipments-header">
      
        <div>
          <h1>Shipments</h1>
          <p>Manage and track all your cargo shipments.</p>
        </div> 
        <div className="lama">

          <div className="mini">
        <button className="export-btn">
            <FileDown className="btn-icon" />
            Export
          </button>
          <button className="print-btn btt">
            <Printer className="btn-icon" />
            Print
          </button>
          </div>
        <button className="new-shipment-btn">
          <Plus className="btn-icon" /> New Shipment
        </button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="shipments-table">
              <TableCell>ID</TableCell>
              <TableCell>Shipment</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Delivery Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipments.map((shipment, index) => (
              <TableRow key={shipment.id}>
                <TableCell>{shipment.id}</TableCell>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Package size={18} />
                    {shipment.name}
                  </div>
                </TableCell>
                <TableCell>{shipment.origin}</TableCell>
                <TableCell>{shipment.destination}</TableCell>
                <TableCell>{shipment.date}</TableCell>
                <TableCell>
                  <Badge
                    badgeContent={formatStatusText(shipment.status)}
                    color={getStatusColor(shipment.status)}
                  />
                </TableCell>
                <TableCell>{shipment.customer}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={(e) => handleMenuClick(e, index)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={menuIndex === index}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Edit Shipment</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Track Shipment</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Generate Report</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   </main>  
  </div>
  </div>
   
  );
};

export default Shipments;
