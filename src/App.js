import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Home/Navbar"; // Make sure this path is correct
import Home from "./pages/Index";
import Login from "./Components/Home/login";
import SignUp from "./Components/Home/signup";
import NavbarLog from "./Components/Home/navbar.log";
import Dashboard from "./Components/Home/Dashboard";
import Driver from "./Components/Home/Driver";

import "./App.css";

// Query Client instance
const queryClient = new QueryClient();

// This component handles route-based rendering
const AppWrapper = () => {
  const location = useLocation();

  // Routes where Navbar should show
  const navPath = ["/", "/login", "/signup"];

  return (
    <>
      {/* Show Navbar only on certain routes */}
      {navPath.includes(location.pathname) && <NavbarLog />}

      {/* Toast and Routing */}
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/driver" element={<Driver />}/>
      </Routes>
    </>
  );
};

// Main App
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppWrapper />
      </Router>
    </QueryClientProvider>
  );
};

export default App;

