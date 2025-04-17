const mongoose = require('mongoose');
const message = new mongoose.Schema({
    sender :{type: mongoose.Schema.Types.ObjectId, ref: 'user' ,required: true},
    receiver :{type: mongoose.Schema.Types.ObjectId, ref: 'user' ,required: true},
    content: {type: String, required: true},
    time: {type: Date ,default:Date.now}
});
module.exports = mongoose.model('message',message);