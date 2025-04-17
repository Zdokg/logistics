import { useState } from "react";
import {
  Person,
  Send,
  Search,
  AccessTime,
  Check,
  DoneAll,
} from "@mui/icons-material";
import {
  Paper,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
  Avatar,
  Typography,
  Badge,
} from "@mui/material";
import "./MessagesD.css";
import Header from "../Driver/HeaderD";
import Sidebar from "../Driver/SiderbarD";

export default function Messages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentConversation, setCurrentConversation] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [tabValue, setTabValue] = useState("all");

  // Sample conversations
  const conversations = [
    {
      id: 1,
      name: "Dispatch Team",
      role: "Admin",
      lastMessage: "Your new assignment details are ready",
      timestamp: "10:30 AM",
      unread: 2,
      isAdmin: true,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Fleet Manager",
      lastMessage: "Please confirm your arrival time",
      timestamp: "Yesterday",
      unread: 0,
      isAdmin: true,
    },
    {
      id: 3,
      name: "Maintenance Dept",
      role: "Support",
      lastMessage: "Truck maintenance reminder",
      timestamp: "Yesterday",
      unread: 1,
      isAdmin: true,
    },
    {
      id: 4,
      name: "Bob Miller",
      role: "Warehouse",
      lastMessage: "Loading dock #3 is ready for you",
      timestamp: "Monday",
      unread: 0,
      isAdmin: false,
    },
  ];

  // Sample messages for each conversation
  const messagesByConversation = {
    1: [
      {
        id: 1,
        senderId: 1,
        senderName: "Dispatch Team",
        content:
          "Hello John, we have a new assignment for you. You'll be delivering electronics to Phoenix Distribution Center.",
        timestamp: "Yesterday, 3:45 PM",
        isRead: true,
        isAdmin: true,
      },
      {
        id: 2,
        senderId: 2,
        senderName: "John Doe",
        content: "Got it. What's the expected departure time?",
        timestamp: "Yesterday, 4:02 PM",
        isRead: true,
        isAdmin: false,
      },
      {
        id: 3,
        senderId: 1,
        senderName: "Dispatch Team",
        content:
          "Your departure is scheduled for 8:00 AM tomorrow. Please confirm if this works for you.",
        timestamp: "Yesterday, 4:10 PM",
        isRead: true,
        isAdmin: true,
      },
      {
        id: 4,
        senderId: 2,
        senderName: "John Doe",
        content: "That works for me. I'll be ready.",
        timestamp: "Yesterday, 4:15 PM",
        isRead: true,
        isAdmin: false,
      },
      {
        id: 5,
        senderId: 1,
        senderName: "Dispatch Team",
        content:
          "Great! Your new assignment details are ready. You can check them on your dashboard. Let us know if you have any questions.",
        timestamp: "Today, 10:30 AM",
        isRead: false,
        isAdmin: true,
      },
    ],
    2: [
      {
        id: 1,
        senderId: 3,
        senderName: "Sarah Johnson",
        content:
          "Hi John, please confirm your expected arrival time at the distribution center.",
        timestamp: "Yesterday, 2:15 PM",
        isRead: true,
        isAdmin: true,
      },
      {
        id: 2,
        senderId: 2,
        senderName: "John Doe",
        content: "Based on current traffic, I should arrive around 4:30 PM.",
        timestamp: "Yesterday, 2:20 PM",
        isRead: true,
        isAdmin: false,
      },
      {
        id: 3,
        senderId: 3,
        senderName: "Sarah Johnson",
        content: "Perfect, I'll inform the receiving team. Drive safely!",
        timestamp: "Yesterday, 2:25 PM",
        isRead: true,
        isAdmin: true,
      },
    ],
    3: [
      {
        id: 1,
        senderId: 4,
        senderName: "Maintenance Dept",
        content:
          "Reminder: Your truck is due for regular maintenance check after this delivery.",
        timestamp: "Yesterday, 11:30 AM",
        isRead: true,
        isAdmin: true,
      },
      {
        id: 2,
        senderId: 2,
        senderName: "John Doe",
        content: "Noted. When should I bring it in?",
        timestamp: "Yesterday, 12:45 PM",
        isRead: true,
        isAdmin: false,
      },
      {
        id: 3,
        senderId: 4,
        senderName: "Maintenance Dept",
        content:
          "Please schedule it for sometime this Friday. We have slots available all day.",
        timestamp: "Today, 9:15 AM",
        isRead: false,
        isAdmin: true,
      },
    ],
    4: [
      {
        id: 1,
        senderId: 5,
        senderName: "Bob Miller",
        content:
          "Hey John, just wanted to let you know that loading dock #3 will be ready for you when you arrive.",
        timestamp: "Monday, 10:20 AM",
        isRead: true,
        isAdmin: false,
      },
      {
        id: 2,
        senderId: 2,
        senderName: "John Doe",
        content: "Thanks for the heads up, Bob!",
        timestamp: "Monday, 10:25 AM",
        isRead: true,
        isAdmin: false,
      },
    ],
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!newMessage.trim() || !currentConversation) return;

    // In a real app, you would send this to an API
    console.log("Sending message:", newMessage, "to:", currentConversation.name);

    // Clear the input
    setNewMessage("");
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  
   const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
  

    
  return (
<div className="messages-container">
           <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                
              <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
                <Header toggleSidebar={toggleSidebar} />
                
              

    
      <div className="header">
        <Typography variant="h5" className="title">
          Messages
        </Typography>
        <Typography variant="body2" className="subtitle">
          Communicate with your team and administrators
        </Typography>
      </div>

      <Paper className="chat-panel">
        <div className="conversation-list">
            <div className="search-input-wrapper">
              <Search className="search-icon11" />
              <TextField
                placeholder="Search conversations..."
                className="search-input11"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
         

          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            className="tabs"
            centered
          >
            <Tab label="All" value="all" />
            <Tab label="Admin" value="admin" />
          </Tabs>

          <div className="conversation-scroll">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`conversation-item ${
                  currentConversation?.id === conversation.id ? "selected" : ""
                }`}
                onClick={() => setCurrentConversation(conversation)}
              >
                <div className="conversation-content">
                  <Avatar className="conversation-avatar">
                    <Person />
                  </Avatar>
                  <div className="conversation-details">
                    <div className="conversation-header">
                      <Typography className="conversation-name">
                        {conversation.name}
                      </Typography>
                      <Typography className="conversation-timestamp">
                        {conversation.timestamp}
                      </Typography>
                    </div>
                    <Typography className="conversation-role">
                      {conversation.role}
                    </Typography>
                    <Typography className="conversation-last-message">
                      {conversation.lastMessage}
                    </Typography>
                  </div>
                </div>
                {conversation.unread > 0 && (
                  <Badge
                    badgeContent={conversation.unread}
                    className="unread-badge"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="chat-area">
          {currentConversation ? (
            <>
              <div className="chat-header">
                <div className="chat-header-content">
                  <Avatar className="chat-avatar">
                    <Person />
                  </Avatar>
                  <div>
                    <Typography className="chat-name">
                      {currentConversation.name}
                    </Typography>
                    <Typography className="chat-role">
                      {currentConversation.role}
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="messages-scroll">
                {messagesByConversation[currentConversation.id]?.map(
                  (message) => (
                    <div
                      key={message.id}
                      className={`message-wrapper ${
                        message.isAdmin ? "admin" : "user"
                      }`}
                    >
                      <Avatar className="message-avatar">
                        <Person />
                      </Avatar>
                      <div className="message-content">
                        <Paper
                          className={`message-bubble ${
                            message.isAdmin ? "admin-bubble" : "user-bubble"
                          }`}
                        >
                          <Typography>{message.content}</Typography>
                        </Paper>
                        <div className="message-meta">
                          <AccessTime className="meta-icon" />
                          <Typography className="meta-text">
                            {message.timestamp}
                          </Typography>
                          {!message.isAdmin &&
                            (message.isRead ? (
                              <DoneAll className="meta-icon" />
                            ) : (
                              <Check className="meta-icon" />
                            ))}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="message-input-area">
                <TextField
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <Button
                  onClick={handleSendMessage}
                  className="send-button"
                  variant="contained"
                >
                  <Send />
                </Button>
              </div>
            </>
          ) : (
            <div className="no-conversation">
              <Typography>
                Select a conversation to start messaging
              </Typography>
            </div>
          )}
        </div>
      </Paper>
    </div>
    </div>
  );
}