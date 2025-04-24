const express= require("express");
const { customer, showC } = require("../control/customer");

const router=express.Router();


router.post("/customer", customer);
router.get("/showC", showC);

module.exports = router;