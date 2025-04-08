import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, UserPlus, Truck } from "lucide-react";
import "./signup.css";

const SignUp = () => {
  const [role, setRole] = useState("client");
  const [email, setEmail] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const toggleShowPassword = () => setShowPassword(!showPassword);




  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };



  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!role) return alert("Veuillez choisir un rôle");

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Inscription réussie :", {
        role,
        username,
        email: role === "driver" ? email : companyEmail,
        phoneNumber,
        companyName,
        location,
      });
      navigate("/login");
    }, 1500);
  };

  

  return (
    <div className="signup">
    <div className="login-container">
      <div className="right">
        <div className="login-card">
          <div className="login-header">
            <Truck size={70} className="truck-icon" />
            <h1 className="titre">Create Account</h1>
            <p>Choose your role and sign up</p>
          </div>










          <div className="role-selector">
            <button
              type="button"
              className={`role-button ${role === "client" ? "selected" : ""}`}
              onClick={() => setRole("client")}
            >
              Client
            </button>
            <button
              type="button"
              className={`role-button ${role === "driver" ? "selected" : ""}`}
              onClick={() => setRole("driver")}
            >
              Driver
            </button>
          </div>

          <form onSubmit={handleSignUp}>
            <div className="input-group">
              <label htmlFor="username">Name</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>









            {role === "driver" && (
              <>
                
                <div className="input-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" onClick={toggleShowPassword} className="password-toggle">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            
                <div>
                  <label htmlFor="photo">Driver License <br /></label>
                    <input type="file" accept="image/*" onChange={handleImageChange} /> 
                          {image && (
                         <div style={{ marginTop: "20px" }}>
                        <img src={image} alt="Uploaded" style={{ width: "200px", borderRadius: "10px" }} />
                    </div>
                   )}
            </div>

              </>
            )}










            {role === "client" && (
              <>
                <div className="input-group">
                  <label htmlFor="companyName">Company</label>
                  <input
                    id="companyName"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>


                <div className="input-group">
                  <label htmlFor="location">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" onClick={toggleShowPassword} className="password-toggle">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

              </>
            )}

            



           




            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="loader" />
                  Signing up...
                </>
              ) : (
                <>
                  <UserPlus className="login-icon" />
                  Sign Up
                </>
              )}
            </button>

            <p className="signup-link">
              Already have an account? <a href="/login" className="signup-text">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
