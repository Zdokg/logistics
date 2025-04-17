import React, { useState } from 'react';
import { 
  Button,
  Card,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Avatar,
  TextareaAutosize
} from '@mui/material';
import { 
  Check as CheckIcon, 
  
  LocalShipping as TruckIcon,
  Inventory as PackageIcon,
  CalendarToday as CalendarIcon
} from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import './QuoteForm.css'; // We'll create this CSS file
import { useNavigate } from "react-router-dom";

const QuoteForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Shipping details
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    dimensions: '',
    
    // Service preferences
    serviceType: 'standard',
    deliverySpeed: 'normal',
    specialRequirements: '',
    
    // Contact information
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
  });
  
  const { enqueueSnackbar } = useSnackbar();
  
  const updateFormData = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };
  
  const handleNext = () => {
    if (activeStep === 0 && (!formData.origin || !formData.destination)) {
      enqueueSnackbar("Please fill in both origin and destination fields.", { variant: 'error' });
      return;
    }
    
    if (activeStep === 2 && (!formData.fullName || !formData.email)) {
      enqueueSnackbar("Please provide your name and email.", { variant: 'error' });
      return;
    }
    
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };
  
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    enqueueSnackbar("Quote Request Submitted! We'll get back to you with a quote shortly.", { variant: 'success' });
    
    // Move to the confirmation step
    setActiveStep(3);
  };
  
  const steps = ['Shipping Details', 'Service Options', 'Contact Info', 'Confirmation'];

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  
  return (
    <div className="quote-form-container">
      {/* Progress Stepper */}
      <Box sx={{ width: '100%', mb: 4 }} >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}  >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      
      {/* Form Card */}
      <Card className="form-card" elevation={3}>
        <form onSubmit={handleSubmit} className="quote-form">
          {/* Step 1: Shipping Details */}
          {activeStep === 0 && (
            <div className="form-step">
              <Typography variant="h4" align="center" gutterBottom>
                Shipping Details
              </Typography>
              
              <div className="form-grid">
                <TextField
                  label="Origin Location"
                  variant="outlined"
                  placeholder="City, Country"
                  value={formData.origin}
                  onChange={(e) => updateFormData('origin', e.target.value)}
                  fullWidth
                />
                
                <TextField
                  label="Destination"
                  variant="outlined"
                  placeholder="City, Country"
                  value={formData.destination}
                  onChange={(e) => updateFormData('destination', e.target.value)}
                  fullWidth
                />
              </div>
              
              <FormControl fullWidth variant="outlined" className="form-control">
                <InputLabel>Cargo Type</InputLabel>
                <Select
                  value={formData.cargoType}
                  onChange={(e) => updateFormData('cargoType', e.target.value)}
                  label="Cargo Type"
                >
                  <MenuItem value="general">General Cargo</MenuItem>
                  <MenuItem value="hazardous">Hazardous Materials</MenuItem>
                  <MenuItem value="refrigerated">Refrigerated</MenuItem>
                  <MenuItem value="oversized">Oversized</MenuItem>
                  <MenuItem value="fragile">Fragile Items</MenuItem>
                </Select>
              </FormControl>
              
              <div className="form-grid">
                <TextField
                  label="Total Weight (kg)"
                  type="number"
                  variant="outlined"
                  placeholder="0.00"
                  value={formData.weight}
                  onChange={(e) => updateFormData('weight', e.target.value)}
                  fullWidth
                />
                
                <TextField
                  label="Dimensions (L×W×H in cm)"
                  variant="outlined"
                  placeholder="100×50×30"
                  value={formData.dimensions}
                  onChange={(e) => updateFormData('dimensions', e.target.value)}
                  fullWidth
                />
              </div>
            </div>
          )}
          
          {/* Step 2: Service Options */}
          {activeStep === 1 && (
            <div className="form-step">
              <Typography variant="h4" align="center" gutterBottom className='form-step-title'>
                Service Options
              </Typography>
              
              <div className="service-options">
                <Typography variant="subtitle1" gutterBottom>Service Type</Typography>
                <div className="service-cards">
                  <Card 
                    className={`service-card ${formData.serviceType === 'standard' ? 'selected' : ''}`}
                    onClick={() => updateFormData('serviceType', 'standard')}
                  >
                    <div className="service-card-content">
                      <Avatar className="service-icon">
                        <TruckIcon />
                      </Avatar>
                      <div>
                        <Typography variant="h6">Standard Shipping</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Cost-effective solution for non-urgent shipments
                        </Typography>
                      </div>
                    </div>
                  </Card>
                  
                  <Card 
                    className={`service-card ${formData.serviceType === 'express' ? 'selected' : ''}`}
                    onClick={() => updateFormData('serviceType', 'express')}
                  >
                    <div className="service-card-content">
                      <Avatar className="service-icon">
                        <PackageIcon />
                      </Avatar>
                      <div>
                        <Typography variant="h6">Express Shipping</Typography>
                        <Typography variant="body2" color="textSecondary">
                          Faster delivery with priority handling
                        </Typography>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              
              <FormControl component="fieldset" className="delivery-speed">
                <Typography variant="subtitle1" gutterBottom>Delivery Speed</Typography>
                <RadioGroup 
                  value={formData.deliverySpeed} 
                  onChange={(e) => updateFormData('deliverySpeed', e.target.value)}
                >
                  <FormControlLabel 
                    value="economy" 
                    control={<Radio />} 
                    label={
                      <div className="delivery-option">
                        
                        <span>Economy (7-10 business days)</span>
                      </div>
                    } 
                  />
                  <FormControlLabel 
                    value="normal" 
                    control={<Radio />} 
                    label={
                      <div className="delivery-option">
                        
                        <span>Normal (3-6 business days)</span>
                      </div>
                    } 
                  />
                  <FormControlLabel 
                    value="priority" 
                    control={<Radio />} 
                    label={
                      <div className="delivery-option">
                        
                        <span>Priority (1-2 business days)</span>
                      </div>
                    } 
                  />
                </RadioGroup>
              </FormControl>
              
              <TextField
                label="Special Requirements"
                multiline
                rows={4}
                variant="outlined"
                placeholder="Any special handling instructions or requirements"
                value={formData.specialRequirements}
                onChange={(e) => updateFormData('specialRequirements', e.target.value)}
                fullWidth
              />
            </div>
          )}
          
          {/* Step 3: Contact Information */}
          {activeStep === 2 && (
            <div className="form-step">
              <Typography variant="h4" align="center" gutterBottom>
                Contact Information
              </Typography>
              
              <div className="form-grid">
                <TextField
                  label="Full Name"
                  variant="outlined"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  fullWidth
                />
                
                <TextField
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  fullWidth
                />
              </div>
              
              <div className="form-grid">
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  placeholder="+1 (123) 456-7890"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  fullWidth
                />
                
                <TextField
                  label="Company Name"
                  variant="outlined"
                  placeholder="Your Company Ltd."
                  value={formData.companyName}
                  onChange={(e) => updateFormData('companyName', e.target.value)}
                  fullWidth
                />
              </div>
            </div>
          )}
          
          {/* Step 4: Confirmation */}
          {activeStep === 3 && (
            <div className="confirmation-step">
              <div className="confirmation-icon">
                <Avatar className="success-icon">
                  <CheckIcon />
                </Avatar>
              </div>
              
              <Typography variant="h4" align="center" gutterBottom>
                Quote Request Submitted!
              </Typography>
              
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Thank you for requesting a shipping quote. Our team will analyze your requirements 
                and provide you with a detailed quote shortly. A confirmation has been sent to your email.
              </Typography>
              
              <div className="reference-number">
                <Typography variant="subtitle1">Reference Number:</Typography>
                <Typography variant="h5" className='reference-num'>
                  QT-{Math.floor(100000 + Math.random() * 900000)}
                </Typography>
              </div>
              
              <Button 
                variant="outlined" 
                onClick={() => {
                  setActiveStep(0);
                  setFormData({
                    origin: '',
                    destination: '',
                    cargoType: '',
                    weight: '',
                    dimensions: '',
                    serviceType: 'standard',
                    deliverySpeed: 'normal',
                    specialRequirements: '',
                    fullName: '',
                    email: '',
                    phone: '',
                    companyName: '',
                  });
                }}
                className="new-quote-button"
              >
                Start a New Quote
              </Button>
            </div>
          )}
          
          {/* Navigation buttons */}
          {activeStep < 3 && (
            <div className="form-navigation">
              {activeStep > 0 ? (
                <Button variant="outlined" onClick={handleBack} className='Back-but'>
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              <Button variant="contained" color="secondary" onClick={goToHome} className='Home-but'>
                Home
              </Button>
              {activeStep < 2 ? (
                <Button variant="contained" color="primary" onClick={handleNext}>
                  Continue
                </Button>
                
              ) : (
                <Button type="submit" variant="contained" color="primary">
                  Submit Quote Request
                </Button>
              ) }
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default QuoteForm;