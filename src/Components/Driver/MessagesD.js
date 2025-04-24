import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import {
  Person,
  Send,
  Search,
} from "@mui/icons-material";
import {
  Paper,
  TextField,
  Button,
  Tabs,
  Tab,
  Avatar,
  Typography,
  Badge,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import "./MessagesD.css";
import Header from "../Driver/HeaderD";
import Sidebar from "../Driver/SiderbarD";
import { useChat } from "../ChatContext";
import { supabase } from "../supabase/client";

const socket = io("http://localhost:5000"); // Connect to your socket server
const CHAT_ID = 2;

const MessagesD = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentConversation, setCurrentConversation] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [tabValue, setTabValue] = useState("all");
  const { messagesByConversation, sendMessage } = useChat();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [newChatOpen, setNewChatOpen] = useState(false);
  const [newChatName, setNewChatName] = useState("");

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Admin",
      role: "Admin",
      lastMessage: "",
      timestamp: "",
      unread: 2,
      isAdmin: true,
    },
  ]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    supabase
      .from("messages")
      .select("id, content, created_at, chat_id")
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        if (mounted && data) setMessages(data);
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("public:messages")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setMessages((prev) => [...prev, payload.new]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    chatBoxRef.current?.scrollTo({ top: chatBoxRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;
    setLoading(true);
    await supabase.from("messages").insert([{ chat_id: CHAT_ID, content: input }]);
    setInput("");
    setLoading(false);
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch = conv.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = tabValue === "all" || (tabValue === "admin" && conv.isAdmin);
    return matchesSearch && matchesTab;
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !currentConversation) return;

    socket.emit("sendMessage", {
      conversationId: currentConversation.id,
      sender: "Driver",
      message: newMessage,
    });

    sendMessage(currentConversation.id, "Driver", newMessage);
    setNewMessage("");
  };

  const handleCreateNewChat = () => {
    if (newChatName.trim()) {
      const newConv = {
        id: Date.now(),
        name: newChatName,
        role: "New Contact",
        lastMessage: "",
        timestamp: "",
        unread: 0,
        isAdmin: false,
      };
      setConversations((prev) => [...prev, newConv]);
      setCurrentConversation(newConv);
      setNewChatName("");
      setNewChatOpen(false);
    }
  };

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      const { conversationId, sender, message } = data;
      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === conversationId
            ? {
                ...conv,
                lastMessage: message,
                timestamp: new Date().toLocaleTimeString(),
                unread: conv.unread + 1,
              }
            : conv
        )
      );
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const currentMessages = currentConversation
    ? messagesByConversation[currentConversation.id] || []
    : [];

  return (
    <div className="messages-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${sidebarOpen ? "sidebar-open" : "sidebar-collapsed"}`}>
        <Header toggleSidebar={toggleSidebar} />

        <Paper className="chat-panel">
          {/* Conversation List */}
          <div className="conversation-list">
            <div className="search-input-wrapper">
              <TextField
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <Tabs value={tabValue} onChange={handleTabChange} className="tabs" centered>
              <Tab label="Chat" value="all" />
            </Tabs>

            <Button
              onClick={() => setNewChatOpen(true)}
              variant="contained"
              style={{ backgroundColor: "chocolate", color: "white", height: "40px", marginTop: "5px" }}
            >
              New Chat
            </Button>

            <div className="conversation-scroll">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`conversation-item ${currentConversation?.id === conversation.id ? "selected" : ""}`}
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
                    <Badge badgeContent={conversation.unread} className="unread-badge" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
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

                <div className="messages-scroll" ref={chatBoxRef}>
                  {currentMessages.map((msg, i) => (
                    <p key={i}>
                      <b>{msg.sender}:</b> {msg.text}
                    </p>
                  ))}
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
                <Typography>Select a conversation to start messaging</Typography>
              </div>
            )}
          </div>
        </Paper>
      </div>

      {/* Dialog for creating new chat */}
      <Dialog open={newChatOpen} onClose={() => setNewChatOpen(false)}>
        <DialogTitle>Create a New Chat</DialogTitle>
        <DialogContent>
          <TextField
            label="Chat Name"
            value={newChatName}
            onChange={(e) => setNewChatName(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNewChatOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleCreateNewChat} color="primary">Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MessagesD;
