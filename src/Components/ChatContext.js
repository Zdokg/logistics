import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const socket = useRef(null);
  const [messagesByConversation, setMessagesByConversation] = useState({
    1: [
      
    ]
  });

  useEffect(() => {
    socket.current = io("http://localhost:5000");

    socket.current.on("receive_message", ({ conversationId, message }) => {
      setMessagesByConversation((prev) => ({
        ...prev,
        [conversationId]: [...(prev[conversationId] || []), message],
      }));
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const sendMessage = (conversationId, sender, text) => {
    const message = { sender, text };

    // Send to server
    socket.current.emit("send_message", { conversationId, message });

    // Update local state
    setMessagesByConversation((prev) => ({
      ...prev,
      [conversationId]: [...(prev[conversationId] || []), message],
    }));
  };

  return (
    <ChatContext.Provider value={{ messagesByConversation, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
