const LUser = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = process.env.JWT_SECRET || "your-very-secret-key";

// Compte admin constant
const adminAccount = {
  email: "admin@example.com",
  // Ce hash correspond au mot de passe "admin123"
  password: "$2b$10$nwi9PWQDV/TRPOGDdQjx4uOKgdukDdUEnxuo8jLGMcu4y3BYHKmC6",
  role: "admin",
  name: "Admin"
};
// commande pour hash le password: node -e "console.log(require('bcryptjs').hashSync('admin123', 10))"


async function Login(req, res) {
  const { email, password } = req.body;

  try {
    // Si l'email correspond à l'admin constant
    if (email === adminAccount.email) {
      const isMatchAdmin = await bcrypt.compare(password, adminAccount.password);
      if (!isMatchAdmin) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      const token = jwt.sign(
        { id: "admin_id", email: adminAccount.email, role: adminAccount.role },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.status(200).json({
        message: "Logged In!",
        token,
        user: {
          id: "admin_id",
          name: adminAccount.name,
          email: adminAccount.email,
          role: adminAccount.role
        }
      });
    }

    // Pour les autres comptes, recherche dans la base de données
    const user = await LUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Account doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Logged In!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function show(req, res) {
  try {
    const users = await LUser.find({});
    res.json(users);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving users" });
  }
}

async function FPass(req, res) {
  const { email, newPass } = req.body;
  try {
    const user = await LUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email is not registered" });
    }

    // Hache le nouveau mot de passe
    const hashedPassword = await bcrypt.hash(newPass, 10);
    user.password = hashedPassword;

    await user.save();
    res.status(201).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { Login, show, FPass };
