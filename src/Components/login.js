import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, LogIn, Truck } from "lucide-react"; // Assuming you have this custom hook
import "./login.css"; // Import the CSS file
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/API/Login", {
        email,
        password,
      });
  
      if (response.status === 200) {
        const { message, role } = response.data;
  
        // ✅ Save role in localStorage
        localStorage.setItem("role", role);
        setMessage(message);
  
        // ✅ Navigate based on role
        if (role === "admin") {
          navigate("/admin");
        } else if (role === "driver") {
          navigate("/driver");
        } else {
          navigate("/"); // fallback
        }
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  
  

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    
    
    <div className="login-container">

      <div className="left">
        <img src="../public/Photos/map6.jpg"/>
      </div>


      <div className="right">
      <div className="login-card">
        <div className="login-header">
          <Truck size={70} className="truck-icon" />
          <div className="tt"><h1 className="titre">Welcome Back</h1></div>
          <p>Log in to access your logistics dashboard</p>
        </div>
        



        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>




          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" onClick={toggleShowPassword} className="password-toggle">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>





          <div className="remember-forgot">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>



          

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="loader" />
                Logging in...
              </>
            ) : (
              <>
                <LogIn className="login-icon" type="submit"/>
                Log In
              </>
            )}
          </button>




          <p className="signup-link">
            Don't have an account?{" "}
            <a href="/signup" className="signup-text">Sign Up</a>
          </p>




        </form>





      </div>
      </div>
      </div>


    
  );
};

export default Login;
