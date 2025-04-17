const { default: mongoose } = require("mongoose")

const Shipment = new mongoose.Schema({
    ID:{ type: String, require: true },
    Shipments:{ type: String, require: true },
    Origin:{ type: String, require: true },
    Destination:{ type: String, require: true },
    Delivery_Date:{ type: String, require: true },
    Status:{ type: String, require: true },
    Customer:{ type: String, require: true },
})

module.exports = mongoose.model("Shipment", Shipment);