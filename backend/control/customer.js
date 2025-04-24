const Cust = require("../models/customer");


async function customer (req, res) {
    
    const { ID, Customer , Email, Phone, Location ,Status} = req.body;
    
      try {
        const CUST = new Cust({
            ID,
            Customer, 
            Email, 
            Phone, 
            Location, 
            Status
        });
        await CUST.save();
        res.status(201).json({ message: "Customer added", CUST });
      } catch (error) {
        return res.status(500).json({ error: "Error adding the customer", details: error.message });
      }
      
}

async function showC(req, res) {
  try {
    const customers = await Customer.find({});
    res.json(customers);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving the customers" });
  }
}


module.exports = { customer, showC};