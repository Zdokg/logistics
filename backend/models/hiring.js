const { default: mongoose } = require("mongoose");

const Hiring = new mongoose.Schema({
    Title:{ type: String, require: true },
    Department:{ type: String, require: true },
    Location:{ type: String, require: true },
    Experience:{ type: String, require: true },
    Remote:{ type: Boolean, require: false },
    Description:{ type: String, require: true }
});

module.exports = mongoose.model("Hiring", Hiring);