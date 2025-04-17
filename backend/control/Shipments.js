const Shipment = require("../models/Shipment");


async function shipment (req, res) {
    
    const { ID, Shipments, Origin, Destination, Delivery_Date,Status, Customer } = req.body;
    
      try {
        const SHIP = new Shipment({
            ID,
            Shipments, 
            Origin, 
            Destination, 
            Delivery_Date,Status, 
            Customer
        });
        await SHIP.save();
        res.status(201).json({ message: "Shipment added", SHIP });
      } catch (error) {
        return res.status(500).json({ error: "Error adding the shipment" });
      }
}

async function showS(req, res) {
  try {
    const ships = await Shipment.find({});
    res.json(ships);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving Shipments" });
  }
}


module.exports = { shipment, showS };