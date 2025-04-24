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
  Badge,
  Snackbar,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Package, Plus, FileDown, Printer } from "lucide-react";
import Sidebar from "../Dashboard/Sidebar";
import Header from "../Dashboard/Header";
import "./Shipments.css";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const shipments = [
  {
    id: "SH-3852",
    name: "Electronics Cargo",
    origin: "Shanghai, CN",
    destination: "New York, US",
    date: "Apr 10, 2025",
    status: "completed",
    customer: "TechGlobal Inc.",
  },
  {
    id: "SH-4251",
    name: "Medical Supplies",
    origin: "Berlin, DE",
    destination: "Boston, US",
    date: "Apr 12, 2025",
    status: "delayed",
    customer: "MedSupply Corp",
  },
  {
    id: "SH-8742",
    name: "Furniture Delivery",
    origin: "Bangkok, TH",
    destination: "Chicago, US",
    date: "Apr 15, 2025",
    status: "in-transit",
    customer: "Modern Living",
  },
  {
    id: "SH-9932",
    name: "Auto Parts",
    origin: "Detroit, US",
    destination: "Los Angeles, US",
    date: "Apr 18, 2025",
    status: "scheduled",
    customer: "AutoZone",
  },
  {
    id: "SH-1077",
    name: "Food Products",
    origin: "Madrid, ES",
    destination: "London, UK",
    date: "Apr 20, 2025",
    status: "scheduled",
    customer: "FreshFoods Ltd",
  },
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

const formSchema = z.object({
  ID: z.string().min(2, { message: "ID must be at least 2 characters." }),
  Shipments: z.string().min(2, { message: "Shipment name must be at least 2 characters." }),
  Origin: z.string().min(2, { message: "Origin is required." }),
  Destination: z.string().min(2, { message: "Destination is required." }),
  Delivery_Date: z.string().min(2, { message: "Delivery date is required." }),
  Status: z.string().min(2, { message: "Status is required." }),
  Customer: z.string().min(2, { message: "Customer name is required." }),
});

const Shipments = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openPositions, setOpenPositions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ID: "",
      Shipments: "",
      Origin: "",
      Destination: "",
      Delivery_Date: "",
      Status: "",
      Customer: "",
    },
  });

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  const onSubmit = (values) => {
    const newShipment = {
      id: values.ID,
      name: values.Shipments,
      origin: values.Origin,
      destination: values.Destination,
      date: values.Delivery_Date,
      status: values.Status,
      customer: values.Customer,
    };

    setOpenPositions((prev) => [...prev, newShipment]);
    setSnackbarMessage(`${values.Shipments} has been added to the shipments.`);
    setSnackbarOpen(true);
    reset();
    setDialogOpen(false);
  };

  const filteredShipments = [...shipments, ...openPositions].filter((v) => {
    const values = `${v.id} ${v.name} ${v.origin} ${v.destination} ${v.date} ${v.status} ${v.customer}`.toLowerCase();
    return values.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="shipments-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`main-content ${sidebarOpen ? "sidebar-open" : "sidebar-collapsed"}`}>
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
              <button className="new-shipment-btn" onClick={() => setDialogOpen(true)}>
                <Plus className="btn-icon" /> New Shipment
              </button>
              <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>Add new shipment</DialogTitle>
                <DialogContent>
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Controller
                      name="ID"
                      control={control}
                      render={({ field }) => (
                        <TextField fullWidth label="Shipment ID" margin="normal" error={!!errors.ID} helperText={errors.ID?.message} {...field} />
                      )}
                    />
                    <Controller
                      name="Shipments"
                      control={control}
                      render={({ field }) => (
                        <TextField fullWidth label="Shipment Name" margin="normal" error={!!errors.Shipments} helperText={errors.Shipments?.message} {...field} />
                      )}
                    />
                    <Controller
                      name="Origin"
                      control={control}
                      render={({ field }) => (
                        <TextField fullWidth label="Origin" margin="normal" error={!!errors.Origin} helperText={errors.Origin?.message} {...field} />
                      )}
                    />
                    <Controller
                      name="Destination"
                      control={control}
                      render={({ field }) => (
                        <TextField fullWidth label="Destination" margin="normal" error={!!errors.Destination} helperText={errors.Destination?.message} {...field} />
                      )}
                    />
                    <Controller
                      name="Delivery_Date"
                      control={control}
                      render={({ field }) => (
                        <TextField fullWidth label="Delivery Date" margin="normal" error={!!errors.Delivery_Date} helperText={errors.Delivery_Date?.message} {...field} />
                      )}
                    />
                    <Controller
                      name="Status"
                      control={control}
                      render={({ field }) => (
                        <TextField fullWidth label="Status" margin="normal" error={!!errors.Status} helperText={errors.Status?.message} {...field} />
                      )}
                    />
                    <Controller
                      name="Customer"
                      control={control}
                      render={({ field }) => (
                        <TextField fullWidth label="Customer" margin="normal" error={!!errors.Customer} helperText={errors.Customer?.message} {...field} />
                      )}
                    />
                    <DialogActions>
                      <Button onClick={() => setDialogOpen(false)} style={{color: 'chocolate'}}>Cancel</Button>
                      <Button type="submit" variant="contained" style={{backgroundColor: 'chocolate'}} >Add Shipment</Button>
                    </DialogActions>
                  </form>
                </DialogContent>
              </Dialog>
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
                {filteredShipments.map((shipment, index) => (
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
