const { Server } = require("socket.io");

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000", // Your frontend URL
      methods: ["GET", "POST"]
    },
    path: "/socket.io", // Optional: specify a custom path
  });

  io.on("connection", (socket) => {
    console.log(`New client connected: ${socket.id}`);

    // Handle a message send event
    socket.on("send_message", (data) => {
      console.log("Message received:", data);
      io.emit("receive_message", data); // Broadcast the message to all clients
    });

    // Handle disconnect event
    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};
