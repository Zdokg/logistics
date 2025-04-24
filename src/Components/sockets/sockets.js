import { useEffect, useState } from "react";
import io from "socket.io-client";

// Default socket URL
const SOCKET_URL = "http://localhost:5000"; // Change to your backend URL

// Create and export the socket
const socket = io(SOCKET_URL, {
  path: "/socket.io", // Optional: specify a custom path
});

export const useSocket = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
      setConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      setConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return { socket, connected };
};

export default socket;
