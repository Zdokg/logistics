const mongoose = require('mongoose');
const user = new mongoose.Schema({
    username:{String, required: true}
});

module.exports = mongoose.model('user', user);