import React from 'react';
import DashboardLayout from '../Layout/DashboardLayout';
import VehicleCard from '../Driver/VehicleCard';
import ShipmentCard from '../Driver/ShipmentCard';
import RouteMap from '../Driver/RouteMap';
import DeliveryTimeline from '../Driver/DeliveryTimeline';
import RecentDeliveries from '../Driver/RecentDeliveries';
import "./Driver.css";

// Mock data for our components
const vehicleData = {
  id: "TRK-78923",
  type: "Truck",
  model: "Volvo FH16",
  licensePlate: "IL-3456-TR",
  status: "operational",
  fuelLevel: 75,
  lastMaintenance: "Mar 15, 2025",
  nextMaintenance: "Jun 15, 2025",
  mileage: 45897,
};

const shipmentData = {
  id: "SHP-45678",
  status: "in-transit",
  origin: "Chicago, IL",
  destination: "Detroit, MI",
  pickup: "Apr 5, 2025",
  delivery: "Apr 6, 2025",
  estimatedArrival: "Apr 6, 2025 - 14:30",
  packages: 18,
  weight: 1250,
  priority: "high",
  customer: "AutoTech Industries",
  description: "Manufacturing parts and machinery equipment for the Detroit plant. Handle with care, contains fragile electronic components.",
};

const timelineStops = [
  {
    id: "stop-1",
    type: "pickup",
    location: "Chicago, IL - Central Warehouse",
    time: "Apr 5, 2025 - 08:30",
    completed: true,
  },
  {
    id: "stop-2",
    type: "checkpoint",
    location: "Gary, IN - Interstate 90 Checkpoint",
    time: "Apr 5, 2025 - 11:45",
    completed: false,
    notes: "Road work ahead, expect delays"
  },
  {
    id: "stop-3",
    type: "checkpoint",
    location: "Kalamazoo, MI - Fuel Station",
    time: "Apr 5, 2025 - 15:30",
    completed: false,
  },
  {
    id: "stop-4",
    type: "delivery",
    location: "Detroit, MI - AutoTech Industries",
    time: "Apr 6, 2025 - 14:30",
    completed: false,
  },
];

const recentDeliveries = [
  {
    id: "del-1",
    shipmentId: "SHP-32456",
    date: "Apr 3, 2025",
    destination: "Indianapolis, IN",
    status: "delivered",
  },
  {
    id: "del-2",
    shipmentId: "SHP-32445",
    date: "Apr 2, 2025",
    destination: "Milwaukee, WI",
    status: "delivered",
  },
  {
    id: "del-3",
    shipmentId: "SHP-32412",
    date: "Apr 1, 2025",
    destination: "St. Louis, MO",
    status: "returned",
  },
  {
    id: "del-4",
    shipmentId: "SHP-32201",
    date: "Mar 29, 2025",
    destination: "Cleveland, OH",
    status: "delivered",
  },
];

function DriverPage() {
  return (
    <DashboardLayout>
      <div className="driver-dashboard">
        <div className="vehicle-shipment-container">
          <VehicleCard vehicle={vehicleData} />
          <ShipmentCard shipment={shipmentData} />
        </div>
        <RouteMap />
        <div className="timeline-deliveries-container">
          <DeliveryTimeline stops={timelineStops} currentStopId="stop-2" />
          <RecentDeliveries deliveries={recentDeliveries} />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DriverPage;