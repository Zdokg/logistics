const { default: mongoose } = require("mongoose")

const Cust= new mongoose.Schema({
    ID:{ type: String, require: true },
    Customer:{ type: String, require: true },
    Email:{ type: String, require: true },
    Phone:{ type: String, require: true },
    Location:{ type: String, require: true},
    Status:{ type: String, require: true }
});

module.exports = mongoose.model("Cust", Cust);