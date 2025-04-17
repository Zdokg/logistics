import React, { useState } from "react";
import { HelpCircle, Search, Mail, Phone, MessageCircle, FileQuestion, CheckCircle } from "lucide-react";
import "./Help.css";
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';
const Help = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItem, setExpandedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleAccordionToggle = (value) => {
    setExpandedItem(expandedItem === value ? null : value);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
 const [sidebarOpen, setSidebarOpen] = useState(true);
const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};
  return (
  
  <div className="help-container">
  <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
  <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <Header toggleSidebar={toggleSidebar} />
    
      <main className="main-content-inner">
      <div className="help-header">
        <h1>Help & Support</h1>
        <p className="help-subtitle">Find answers and get support when you need it.</p>
      </div>
      
      <div className="search-container">
        <div className="search-input-container">
          <Search className="search-icon" />
          <input 
            type="search" 
            placeholder="Search for answers..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="search-button">Search</button>
      </div>

      <div className="tabs-container">
        <div className="tabs-header">
          <button 
            className={`tab ${activeTab === "faq" ? "active" : ""}`}
            onClick={() => setActiveTab("faq")}
          >
            <FileQuestion className="tab-icon" />
            <span>FAQs</span>
          </button>
          <button 
            className={`tab ${activeTab === "documentation" ? "active" : ""}`}
            onClick={() => setActiveTab("documentation")}
          >
            <CheckCircle className="tab-icon" />
            <span>Documentation</span>
          </button>
          <button 
            className={`tab ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            <MessageCircle className="tab-icon" />
            <span>Contact Support</span>
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "faq" && (
            <div className="faq-content">
              <h2>Frequently Asked Questions</h2>
              <p className="content-description">Browse our most common questions and answers.</p>
              
              <div className="accordion">
                {[
                  {
                    id: "item-1",
                    question: "How do I track a shipment?",
                    answer: "You can track your shipment by going to the Shipments page, finding the shipment in the list, and clicking 'Track Shipment'. Alternatively, you can use the search feature to find your shipment by ID."
                  },
                  {
                    id: "item-2",
                    question: "How do I add a new vehicle to the fleet?",
                    answer: "To add a new vehicle, navigate to the Fleet page and click the 'Add Vehicle' button. Fill in the required details about the vehicle such as name, type, capacity, and current location, then save the changes."
                  },
                  {
                    id: "item-3",
                    question: "Can I generate reports from the Analytics page?",
                    answer: "Yes, on the Analytics page, you can view various data visualizations. To generate a report, select the data range you want to include, then click the 'Export' button. You can export reports in PDF, CSV, or Excel formats."
                  },
                  {
                    id: "item-4",
                    question: "How do I schedule maintenance for a vehicle?",
                    answer: "To schedule maintenance, go to the Fleet page, find the vehicle you want to service, click on the dropdown menu, and select 'Schedule Maintenance'. You can then set the date, time, type of maintenance, and add any relevant notes."
                  },
                  {
                    id: "item-5",
                    question: "How do I add a new customer?",
                    answer: "To add a new customer, navigate to the Customers page and click the 'Add Customer' button. Fill in the customer's information including name, contact details, and shipping preferences, then save the changes."
                  },
                  {
                    id: "item-6",
                    question: "What do the different shipment statuses mean?",
                    answer: (
                      <ul className="status-list">
                        <li><strong>Scheduled</strong>: The shipment is planned but not yet in transit.</li>
                        <li><strong>In Transit</strong>: The shipment is currently being transported.</li>
                        <li><strong>Delayed</strong>: The shipment has encountered issues and is behind schedule.</li>
                        <li><strong>Completed</strong>: The shipment has been successfully delivered to its destination.</li>
                      </ul>
                    )
                  },
                  {
                    id: "item-7",
                    question: "How can I optimize my shipping routes?",
                    answer: "Our system provides route optimization tools on the Routes page. You can create new routes and our algorithm will suggest the most efficient paths based on distance, time, and fuel consumption. You can also manually adjust routes as needed."
                  }
                ].map(item => (
                  <div key={item.id} className="accordion-item">
                    <button 
                      className="accordion-header"
                      onClick={() => handleAccordionToggle(item.id)}
                    >
                      {item.question}
                      <span className={`accordion-icon ${expandedItem === item.id ? 'expanded' : ''}`}>+</span>
                    </button>
                    {expandedItem === item.id && (
                      <div className="accordion-content">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "documentation" && (
            <div className="documentation-content">
              <h2>Documentation</h2>
              <p className="content-description">Access comprehensive guides and resources.</p>
              
              <div className="documentation-grid">
                {[
                  {
                    title: "Getting Started Guide",
                    description: "Learn the basics of using the Cargo Control dashboard.",
                    buttonText: "Read Guide"
                  },
                  {
                    title: "Shipment Management",
                    description: "Learn how to create, track, and manage shipments effectively.",
                    buttonText: "Read Guide"
                  },
                  {
                    title: "Fleet Operations",
                    description: "Understand how to maintain and optimize your vehicle fleet.",
                    buttonText: "Read Guide"
                  },
                  {
                    title: "Route Planning",
                    description: "Learn strategies for efficient route planning and optimization.",
                    buttonText: "Read Guide"
                  },
                  {
                    title: "Analytics & Reporting",
                    description: "Make data-driven decisions with our powerful analytics tools.",
                    buttonText: "Read Guide"
                  },
                  {
                    title: "API Documentation",
                    description: "Technical documentation for developers integrating with our API.",
                    buttonText: "Read Guide"
                  }
                ].map((doc, index) => (
                  <div key={index} className="document-card">
                    <h3>{doc.title}</h3>
                    <p>{doc.description}</p>
                    <button className="doc-button">{doc.buttonText}</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="contact-content">
              <h2>Contact Support</h2>
              <p className="content-description">Get in touch with our support team for assistance.</p>
              
              <div className="contact-grid">
                <div className="contact-card">
                  <div className="contact-header">
                    <Mail className="contact-icon" />
                    <h3>Email Support</h3>
                  </div>
                  <p>Send us an email and we'll respond within 24 hours.</p>
                  <button className="contact-button">support@cargocontrol.com</button>
                </div>
                
                <div className="contact-card">
                  <div className="contact-header">
                    <Phone className="contact-icon" />
                    <h3>Phone Support</h3>
                  </div>
                  <p>Call us directly for urgent assistance.</p>
                  <button className="contact-button">+1 (555) 123-4567</button>
                </div>
                
                <div className="contact-form-container">
                  <div className="contact-form-header">
                    <MessageCircle className="contact-icon" />
                    <h3>Submit a Ticket</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          placeholder="Your name" 
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          placeholder="Your email" 
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        placeholder="Brief description of your issue" 
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        placeholder="Describe your issue in detail"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit Ticket</button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div></main>
      </div>
    </div>
  );
};

export default Help;