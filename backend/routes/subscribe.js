const express= require("express");
const { sub } = require("../control/subscribe");
const router=express.Router();


router.post("/sub", sub);
module.exports = router;