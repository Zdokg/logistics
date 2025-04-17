const express= require("express");
const { shipment, showS} = require("../control/Shipments");

const router=express.Router();


router.post("/ship", shipment);
router.get("/showS", showS);

module.exports = router;
