import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import "./App.css";



import Home from "./pages/Index";
import Login from "./Components/Home/login";
import SignUp from "./Components/Home/signup";
import NavbarLog from "./Components/Home/navbar.log";
import Dashboard from "./Components/Home/Dashboard";
import Shipments from "./Components/DPages/Shipments";
import Help from "./Components/DPages/Help";
import Analytics from "./Components/DPages/Analytics";
import Customers from "./Components/DPages/Customers";
import Fleet from "./Components/DPages/Fleet";
import MessagesA from "./Components/DPages/MessagesA";
import Settings from "./Components/DPages/Settings";
import Hiring from "./Components/DPages/Hiring";
import Driver from "./Components/Driver/DashboardD";
import MessagesD from "./Components/Driver/MessagesD";
import TruckD from "./Components/Driver/TruckDetails";
import SD from "./Components/Driver/ShippingDetails";
import Profile from "./Components/Driver/Profile";
import ERROR from "./Components/Home/404";
import Quote from "./Components/Quote/Quote";

// Query Client instance
const queryClient = new QueryClient();

// Show Navbar on specific paths
const Layout = ({ children }) => {
  const location = useLocation();
  const navPath = ["/", "/login", "/signup"];
 

  return (
    <>
      {navPath.includes(location.pathname) && <NavbarLog />}
      {children}
    </>
  );
};

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<ERROR />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/shipments" element={<Shipments />} />
      <Route path="/help" element={<Help />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/customer" element={<Customers />} />
      <Route path="/messagesA" element={<MessagesA />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/hiring" element={<Hiring />} />
      <Route path="/driver" element={<Driver />} />
      <Route path="/messagesD" element={<MessagesD />} />
      <Route path="/truckD" element={<TruckD />} />
      <Route path="/SD" element={<SD />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Toaster />
          <AppRoutes />
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
