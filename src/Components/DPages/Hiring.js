import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  TextField,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  Snackbar,
} from "@mui/material";
import { UserPlus, Briefcase, Users, GraduationCap } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
import * as z from "zod";

const formSchema = z.object({
  position: z.string().min(2, { message: "Position name must be at least 2 characters." }),
  department: z.string().min(2, { message: "Department must be at least 2 characters." }),
  location: z.string().min(2, { message: "Location must be at least 2 characters." }),
  experience: z.string().min(1, { message: "Experience is required." }),
  remote: z.boolean().default(false),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
});

const Hiring = () => {
  const [openPositions, setOpenPositions] = useState([
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
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: "",
      department: "",
      location: "",
      experience: "",
      remote: false,
      description: "",
    },
  });

  const onSubmit = (values) => {
    const newPosition = {
      id: openPositions.length + 1,
      position: values.position,
      department: values.department,
      location: values.location,
      experience: values.experience,
      remote: values.remote,
      applicants: 0,
      postDate: new Date().toISOString().split("T")[0],
    }; 

    setOpenPositions((prev) => [...prev, newPosition]);
    setSnackbarMessage(`${values.position} position has been posted.`);
    setSnackbarOpen(true);
    reset();
    setDialogOpen(false);
  };

  return (
    <div className="hiring-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <Header toggleSidebar={toggleSidebar} />
        

          <div className="hiring-header">
            <div>
              <h1>Hiring Dashboard</h1>
              <p>Manage open positions and job applicants</p>
            </div>
            
            <Button variant="contained" onClick={() => setDialogOpen(true)}>
              <UserPlus style={{ marginRight: "8px" }} /> Post New Position
            </Button>

            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="sm">
              <DialogTitle>Post New Job Position</DialogTitle>
              <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Controller
                    name="position"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Position Title"
                        margin="normal"
                        error={!!errors.position}
                        helperText={errors.position?.message}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="department"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Department"
                        margin="normal"
                        error={!!errors.department}
                        helperText={errors.department?.message}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="location"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Location"
                        margin="normal"
                        error={!!errors.location}
                        helperText={errors.location?.message}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="experience"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Experience Required"
                        margin="normal"
                        error={!!errors.experience}
                        helperText={errors.experience?.message}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="remote"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={field.value}
                            onChange={e => field.onChange(e.target.checked)}
                          />
                        }
                        label="Remote Position"
                      />
                    )}
                  />
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Job Description"
                        margin="normal"
                        multiline
                        minRows={4}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                        {...field}
                      />
                    )}
                  />
                  <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                    <Button type="submit" variant="contained">Post Position</Button>
                  </DialogActions>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <Card className="stat-card stat-card-green">
              <CardHeader
                title={<Typography variant="h5">{openPositions.length}</Typography>}
                subheader="Open Positions"
              />
              <CardContent>
                <div className="stat-card-content">
                  <Briefcase className="stat-icon" />
                  <span>Active job postings</span>
                </div>
              </CardContent>
            </Card>

            <Card className="stat-card stat-card-blue">
              <CardHeader
                title={
                  <Typography variant="h5">
                    {openPositions.reduce((sum, pos) => sum + pos.applicants, 0)}
                  </Typography>
                }
                subheader="Total Applicants"
              />
              <CardContent>
                <div className="stat-card-content">
                  <Users className="stat-icon" />
                  <span>Across all positions</span>
                </div>
              </CardContent>
            </Card>

            <Card className="stat-card stat-card-purple">
              <CardHeader
                title={<Typography variant="h5">15</Typography>}
                subheader="Interviews Scheduled"
              />
              <CardContent>
                <div className="stat-card-content">
                  <GraduationCap className="stat-icon" />
                  <span>Next 7 days</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <h2 className="positions-title">Open Positions</h2>
          <div className="positions-list">
            {openPositions.map((position) => (
              <Card key={position.id} className="position-card">
                <CardHeader
                  title={position.position}
                  subheader={position.department}
                  action={
                    <div className="position-meta">
                      <span className="post-date">Posted: {position.postDate}</span>
                      <span className={`remote-badge ${position.remote ? 'remote' : 'onsite'}`}>
                        {position.remote ? 'Remote' : 'On-site'}
                      </span>
                    </div>
                  }
                />
                <CardContent>
                  <div className="position-details">
                    <div><span className="detail-label">Location:</span> {position.location}</div>
                    <div><span className="detail-label">Experience:</span> {position.experience}</div>
                    <div><span className="detail-label">Applicants:</span> {position.applicants}</div>
                  </div>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" size="small">View Applicants</Button>
                  <Button size="small">Edit Posting</Button>
                </CardActions>
              </Card>
            ))}
          </div>

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

export default Hiring;
