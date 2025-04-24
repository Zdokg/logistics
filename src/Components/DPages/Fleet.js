import React, { useState } from "react";
import "./Fleet.css";
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";

const fleet = [
  { id: "VES-001", name: "Horizon Carrier", type: "ship", status: "active", location: "Pacific Ocean", capacity: "10,000 TEU", lastMaintenance: "Mar 15, 2025" },
  { id: "TRK-053", name: "Road Runner 5", type: "truck", status: "active", location: "Chicago, IL", capacity: "20 tons", lastMaintenance: "Apr 02, 2025" },
  { id: "TRK-127", name: "Highway Master", type: "truck", status: "maintenance", location: "Detroit, MI", capacity: "25 tons", lastMaintenance: "Apr 10, 2025" },
  { id: "AIR-012", name: "SkyFreight 7", type: "plane", status: "active", location: "Frankfurt, DE", capacity: "100 tons", lastMaintenance: "Mar 28, 2025" },
  { id: "VES-008", name: "Pacific Explorer", type: "ship", status: "in-transit", location: "South China Sea", capacity: "8,500 TEU", lastMaintenance: "Feb 20, 2025" }
];

const formSchema = z.object({
  ID: z.string().min(2, { message: "ID must be at least 2 characters." }),
  Vehicle: z.string().min(2, { message: "Vehicle name must be at least 2 characters." }),
  Type: z.string().min(2, { message: "Type must be at least 2 characters." }),
  Status: z.string().min(1, { message: "Status is required." }),
  Location: z.string().min(2, { message: "Location must be at least 2 characters." }),
  Capacity: z.string().min(2, { message: "Capacity must be at least 2 characters." }),
  Last_Maintenance: z.string().min(2, { message: "Last maintenance date required." }),
});

const Fleet = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
      Vehicle: "",
      Type: "",
      Status: "",
      Location: "",
      Capacity: "",
      Last_Maintenance: "",
    },
  });

  const onSubmit = (values) => {
    const newVehicle = {
      id: values.ID,
      name: values.Vehicle,
      type: values.Type,
      status: values.Status,
      location: values.Location,
      capacity: values.Capacity,
      lastMaintenance: values.Last_Maintenance,
    };

    setOpenPositions((prev) => [...prev, newVehicle]);
    setSnackbarMessage(`${values.Vehicle} has been added to the fleet.`);
    setSnackbarOpen(true);
    reset();
    setDialogOpen(false);
  };

  const filteredFleet = [...fleet, ...openPositions].filter((v) => {
    const values = `${v.id} ${v.name || v.Vehicle} ${v.type || v.Type} ${v.status || v.Status} ${v.location || v.Location} ${v.capacity || v.Capacity} ${v.lastMaintenance || v.Last_Maintenance}`.toLowerCase();
    return values.includes(searchTerm.toLowerCase());
  });

  
  return (
    <div className="fleet-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <Header toggleSidebar={toggleSidebar} />

        <div className="fleet-header">
          <div>
            <h1>Fleet</h1>
            <p>Manage your fleet of vehicles and vessels.</p>
          </div>

          <button className="primary-button" onClick={() => setDialogOpen(true)}>Add Vehicle</button>
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="sm">
            <DialogTitle>Add new vehicle</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Controller
                  name="ID"
                  control={control}
                  render={({ field }) => (
                    <TextField fullWidth label="ID" margin="normal" error={!!errors.ID} helperText={errors.ID?.message} {...field} />
                  )}
                />
                <Controller
                  name="Vehicle"
                  control={control}
                  render={({ field }) => (
                    <TextField fullWidth label="Vehicle" margin="normal" error={!!errors.Vehicle} helperText={errors.Vehicle?.message} {...field} />
                  )}
                />
                <Controller
                  name="Type"
                  control={control}
                  render={({ field }) => (
                    <TextField fullWidth label="Type" margin="normal" error={!!errors.Type} helperText={errors.Type?.message} {...field} />
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
                  name="Location"
                  control={control}
                  render={({ field }) => (
                    <TextField fullWidth label="Location" margin="normal" error={!!errors.Location} helperText={errors.Location?.message} {...field} />
                  )}
                />
                <Controller
                  name="Capacity"
                  control={control}
                  render={({ field }) => (
                    <TextField fullWidth label="Capacity" margin="normal" error={!!errors.Capacity} helperText={errors.Capacity?.message} {...field} />
                  )}
                />
                <Controller
                  name="Last_Maintenance"
                  control={control}
                  render={({ field }) => (
                    <TextField fullWidth label="Last Maintenance" margin="normal" error={!!errors.Last_Maintenance} helperText={errors.Last_Maintenance?.message} {...field} />
                  )}
                />

                <DialogActions>
                  <Button onClick={() => setDialogOpen(false)} style={{color:'chocolate'}}>Cancel</Button>
                  <Button type="submit" variant="contained" style={{backgroundColor:'chocolate' }} >Add Vehicle</Button>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="fleet-search">
        <input
  type="text"
  placeholder="Search fleet..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

          <button className="secondary-button">Filter</button>
        </div>

        <table className="fleet-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Vehicle</th>
      <th>Type</th>
      <th>Status</th>
      <th>Location</th>
      <th>Capacity</th>
      <th>Last Maintenance</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {filteredFleet.map((v) => (
      <tr key={v.id}>
        <td>{v.id}</td>
        <td>{v.name}</td>
        <td className="capitalize">{v.type}</td>
        <td><span className={`badge ${v.status}`}>{v.status.replace("-", " ")}</span></td>
        <td>{v.location}</td>
        <td>{v.capacity}</td>
        <td>{v.lastMaintenance}</td>
        <td><button className="action-button">...</button></td>
      </tr>
    ))}
  </tbody>
</table>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
        />
      </div>
    </div>
  );
};

export default Fleet;
