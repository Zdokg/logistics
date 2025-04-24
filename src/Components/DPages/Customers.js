import React, { useState } from "react";
import "./Customers.css"; // Create this CSS file
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
  TextField,
} from "@mui/material";




const formSchema = z.object({
  ID: z.string().min(2, { message: "ID must be at least 2 characters." }),
  Vehicle: z.string().min(2, { message: "Vehicle name must be at least 2 characters." }),
  Type: z.string().min(2, { message: "Type must be at least 2 characters." }),
  Status: z.string().min(1, { message: "Status is required." }),
  Location: z.string().min(2, { message: "Location must be at least 2 characters." }),
  Capacity: z.string().min(2, { message: "Capacity must be at least 2 characters." }),
  Last_Maintenance: z.string().min(2, { message: "Last maintenance date required." }),
});



const customers = [
  {
    id: "CUS-001",
    name: "TechGlobal Inc.",
    contact: "John Smith",
    email: "jsmith@techglobal.com",
    phone: "+1 (555) 123-4567",
    location: "New York, US",
    status: "active",
    type: "enterprise",
    image: ""
  },
  {
    id: "CUS-002",
    name: "MedSupply Corp",
    contact: "Sarah Johnson",
    email: "sjohnson@medsupply.com",
    phone: "+1 (555) 234-5678",
    location: "Boston, US",
    status: "active",
    type: "enterprise",
    image: ""
  },
  {
    id: "CUS-003",
    name: "Modern Living",
    contact: "David Chen",
    email: "dchen@modernliving.com",
    phone: "+1 (555) 345-6789",
    location: "Chicago, US",
    status: "active",
    type: "business",
    image: ""
  },
  {
    id: "CUS-004",
    name: "AutoZone",
    contact: "Miguel Rodriguez",
    email: "mrodriguez@autozone.com",
    phone: "+1 (555) 456-7890",
    location: "Los Angeles, US",
    status: "inactive",
    type: "enterprise",
    image: ""
  },
  {
    id: "CUS-005",
    name: "FreshFoods Ltd",
    contact: "Emma Wilson",
    email: "ewilson@freshfoods.com",
    phone: "+44 20 7946 0958",
    location: "London, UK",
    status: "active",
    type: "business",
    image: ""
  }
];



const getInitials = (name) => {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return parts[0][0] + parts[1][0];
  }
  return name.substring(0, 2).toUpperCase();
};

const Customers = () => {
   const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
    Customer: "",
    Email: "",
    Phone: "",
    Location: "",
    Status: "",
    Type: "",
  },
});

const onSubmit = (values) => {
  const newCustomer = {
    id: values.ID,
    name: values.Customer,
    email: values.Email,
    phone: values.Phone,
    location: values.Location,
    status: values.Status,
    type: values.Type,
  };

  setOpenPositions((prev) => [...prev, newCustomer]);
  setSnackbarMessage(`${values.Customer} has been added to the customer.`);
  setSnackbarOpen(true);
  reset();
  setDialogOpen(false);
};

  return (
  
   <div className="customers-container">
    <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    
    <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <Header toggleSidebar={toggleSidebar} />

   <main className="main-content-inner">
      <div className="header">
        <div>
          <h1>Customers</h1>
          <p>Manage your client relationships and accounts.</p>
        </div>
        <button className="primary-button" onClick={() => setDialogOpen(true)}>Add Customer</button>
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="sm">
            <DialogTitle>Add new customer</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Controller
                  name="ID"
                  control={control}
                  render={({ customer }) => (
                    <TextField fullWidth label="ID" margin="normal" error={!!errors.ID} helperText={errors.ID?.message} {...customer} />
                  )}
                />
                <Controller
                  name="Customer"
                  control={control}
                  render={({ customer }) => (
                    <TextField fullWidth label="Customer" margin="normal" error={!!errors.Customer} helperText={errors.Customer?.message} {...customer} />
                  )}
                />
                  <Controller
                  name="Email"
                  control={control}
                  render={({ customer }) => (
                    <TextField fullWidth label="Email" margin="normal" error={!!errors.Email} helperText={errors.Email?.message} {...customer} />
                  )}
                />
                <Controller
                  name="Phone"
                  control={control}
                  render={({ customer }) => (
                    <TextField fullWidth label="Phone" margin="normal" error={!!errors.Phone} helperText={errors.Phone?.message} {...customer} />
                  )}
                />
                <Controller
                  name="Type"
                  control={control}
                  render={({ customer }) => (
                    <TextField fullWidth label="Type" margin="normal" error={!!errors.Type} helperText={errors.Type?.message} {...customer} />
                  )}
                />
                <Controller
                  name="Status"
                  control={control}
                  render={({ customer }) => (
                    <TextField fullWidth label="Status" margin="normal" error={!!errors.Status} helperText={errors.Status?.message} {...customer} />
                  )}
                />
                <Controller
                  name="Location"
                  control={control}
                  render={({ customer }) => (
                    <TextField fullWidth label="Location" margin="normal" error={!!errors.Location} helperText={errors.Location?.message} {...customer} />
                  )}
                />
                <DialogActions>
                  <Button onClick={() => setDialogOpen(false)} style={{color:'chocolate'}}>Cancel</Button>
                  <Button type="submit" variant="contained" style={{backgroundColor:'chocolate' }} >Add Customer </Button>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>

      </div>


      <div className="search-filter">
        <input type="text" placeholder="Search customers..." />
        <button className="filter-button">Filter</button>
      </div>

      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Status</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td className="customer-info">
                <div className="avatar">{getInitials(customer.name)}</div>
                <div>
                  {customer.name}
                  <div className="contact">{customer.contact}</div>
                </div>
              </td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.location}</td>
              <td>
                <span className={`status ${customer.status}`}>
                  {customer.status}
                </span>
              </td>
              <td>
                <span className={`type ${customer.type}`}>
                  {customer.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </main>
      </div>
     
    </div>
    
  );
};

export default Customers;
