import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = ({ children }) => {
  return (
    
      <div className="dashboard-layout">
        <DashboardSidebar />
        <div className="dashboard-main">
          <DashboardHeader />
          <main className="dashboard-content">
            {children}
          </main>
        </div>
      </div>
    
  );
};

export default DashboardLayout;
