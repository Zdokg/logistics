const express= require("express");
const { fleet, showF } = require("../control/Fleet");

const router=express.Router();


router.post("/fleet", fleet);
router.get("/showF", showF);

module.exports = router;