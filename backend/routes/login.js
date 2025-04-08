const express= require("express");
const { Login, show, FPass } = require("../control/login");

const router=express.Router();


router.post("/Login", Login);
router.get("/show", show);
router.post("/FPass", FPass);
module.exports = router;
