const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema(
  {
    sender: { type: String, required: true },
    message: { type: String, required: true },
    receiver: { type: String, required: true },
    timestamp: { type: Date, default: Date.now } // Custom timestamp field
  }
);

module.exports = mongoose.model('chats', ChatSchema);