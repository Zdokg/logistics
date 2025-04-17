import React from 'react';
import { BarChartHorizontal, CalendarCheck, FileCheck, Shield } from 'lucide-react';
import './HeaderQ.css'; // We'll create this CSS file

const QuoteHeader = () => {
  return (
    <div className="quote-header-container">
      <div className="quote-header-text">
        <h1>
          Get a <span className="primary-text">Customized Quote</span> for Your Shipment
        </h1>
        <p>
          Fast and accurate quotes for all your logistics needs. Complete the form below 
          to receive a competitive rate from our experienced team.
        </p>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="icon-container">
            <FileCheck className="feature-icon" />
          </div>
          <h3>Quick Quote Process</h3>
          <p>Simple form, fast response, no complicated paperwork</p>
        </div>
        
        <div className="feature-card">
          <div className="icon-container">
            <BarChartHorizontal className="feature-icon" />
          </div>
          <h3>Competitive Rates</h3>
          <p>Transparent pricing with no hidden fees or surprises</p>
        </div>
        
        <div className="feature-card">
          <div className="icon-container">
            <Shield className="feature-icon" />
          </div>
          <h3>Secure Shipping</h3>
          <p>Full insurance coverage and real-time tracking</p>
        </div>
        
        <div className="feature-card">
          <div className="icon-container">
            <CalendarCheck className="feature-icon" />
          </div>
          <h3>Flexible Scheduling</h3>
          <p>Choose delivery options that match your timeline</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteHeader;