import React , {useState} from "react";
import "./Customers.css"; // Create this CSS file
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
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
        <button className="add-button">Add Customer</button>
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
