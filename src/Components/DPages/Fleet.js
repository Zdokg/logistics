import React , {useState} from "react";
import "./Fleet.css";
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
const fleet = [
  { id: "VES-001", name: "Horizon Carrier", type: "ship", status: "active", location: "Pacific Ocean", capacity: "10,000 TEU", lastMaintenance: "Mar 15, 2025" },
  { id: "TRK-053", name: "Road Runner 5", type: "truck", status: "active", location: "Chicago, IL", capacity: "20 tons", lastMaintenance: "Apr 02, 2025" },
  { id: "TRK-127", name: "Highway Master", type: "truck", status: "maintenance", location: "Detroit, MI", capacity: "25 tons", lastMaintenance: "Apr 10, 2025" },
  { id: "AIR-012", name: "SkyFreight 7", type: "plane", status: "active", location: "Frankfurt, DE", capacity: "100 tons", lastMaintenance: "Mar 28, 2025" },
  { id: "VES-008", name: "Pacific Explorer", type: "ship", status: "in-transit", location: "South China Sea", capacity: "8,500 TEU", lastMaintenance: "Feb 20, 2025" }
];

const Fleet = () => {
   const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ID : "",
      Vehicle: "",
      Type: "",
      Status: "",
      Location: "",
      Capacity: "",
      Last_Maintenance:"",
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

    <div className="fleet-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <Header toggleSidebar={toggleSidebar} />
        
        
      <div className="fleet-header">
        <div>
          <h1>Fleet</h1>
          <p>Manage your fleet of vehicles and vessels.</p>
        </div>
        <button className="primary-button">Add Vehicle</button>
      </div>
      
      <div className="fleet-search">
        <input type="text" placeholder="Search fleet..." />
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
          {fleet.map((v) => (
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
     
    </div>
    </div>
  );
};

export default Fleet;
