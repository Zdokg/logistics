const LUser = require("../models/user");
const bcrypt = require("bcryptjs");

async function RegisterDriver(req, res) {
  const { email, password, photo, name, phone } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new LUser({
      email,
      password: hashedPassword,
      photo,
      name,
      phone,
      role: "driver"
    });

    await user.save();
    res.status(201).json({ message: "Driver signed up", user });
  } catch (error) {
    return res.status(500).json({ error: "Error signing up driver" });
  }
}

async function RegisterClient(req, res) {
  const { email, password, company, name } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new LUser({
      email,
      password: hashedPassword,
      company,
      name,
      role: "client"
    });

    await user.save();
    res.status(201).json({ message: "Client signed up", user });
  } catch (error) {
    return res.status(500).json({ error: "Error signing up client" });
  }
}

async function show1(req, res) {
  try {
    const users = await LUser.find({});
    res.json(users);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving users" });
  }
}

module.exports = { RegisterClient, RegisterDriver, show1 };
