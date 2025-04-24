const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const connectDB = require("./config/db");

const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const fleet = require("./routes/Fleet");
const ship = require("./routes/Shipments");
const customer = require("./routes/customer");
const hiring = require("./routes/hiring");
const setupSockets = require("./sockets/sockets");

const app = express();
const server = http.createServer(app); // 🔁 create HTTP server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // ✅ your frontend
    methods: ["GET", "POST"]
  }
});

const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Connect DB
connectDB();

setupSockets(server);

// Routes
app.use("/API", signupRoutes);
app.use("/API", loginRoutes);
app.use("/API", fleet);
app.use("/API", ship);
app.use("/API", customer);
app.use("/API", hiring);

// 🧠 WebSocket Logic
io.on("connection", (socket) => {
  console.log("🟢 New client connected:", socket.id);

  socket.on("send_message", (data) => {
    console.log("📩 Message received:", data);
    io.emit("receive_message", data); // broadcast to all
  });

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
