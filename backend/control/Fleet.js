const Fleet = require("../models/Fleet");


async function fleet (req, res) {
    const { ID, Vehicle, Type, Status, Location, Capacity, Last_Maintenance } = req.body;
    
      try {
        
        const FL = new Fleet({
          ID,
          Vehicle,
          Type,
          Status,
          Location,
          Capacity,
          Last_Maintenance
        });
    
        await FL.save();
        res.status(201).json({ message: "Vehicle added", FL });
      } catch (error) {
        return res.status(500).json({ error: "Error adding the vehicle" });
      }
}

async function showF(req, res) {
  try {
    const fls = await Fleet.find({});
    res.json(fls);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving Fleets" });
  }
}

module.exports = { fleet, showF };