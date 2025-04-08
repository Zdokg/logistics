const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = [
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "user@example.com", password: "user123", role: "driver" },
];

// JWT secret stored in an environment variable for security
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Login handler
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = users.find((u) => u.email === email);
    if (!user) return res.status(401).json({ message: "User not found" });

    // Check if the password matches the hash
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ message: "Invalid password" });

    // Create JWT token
    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

    // Respond with token and user role
    res.json({
      message: "Login successful",
      token,
      role: user.role
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { login };
