const express = require("express");
const { login } = require("../control/authController");

const router = express.Router();

// Define the login route and use the controller
router.post("/login", login);

module.exports = router;
