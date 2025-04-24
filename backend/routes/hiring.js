const express= require("express");
const { hiring, showH } = require("../control/hiring");

const router=express.Router();


router.post("/hiring", hiring);
router.get("/showH", showH);

module.exports = router;