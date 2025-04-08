const express= require("express");
const { RegisterClient, RegisterDriver, show1 } = require("../control/signup");
const router=express.Router();


router.post("/RegisterClient", RegisterClient );
router.post("/RegisterDriver", RegisterDriver);
router.post("/show1", show1);
module.exports = router;