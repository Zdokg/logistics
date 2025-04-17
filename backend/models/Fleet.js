const { default: mongoose } = require("mongoose")

const Fleet = new mongoose.Schema({
    ID:{ type: String, require: true },
    Vehicle:{ type: String, require: true },
    Type:{ type: String, require: true },
    Status:{ type: String, require: true },
    Location:{ type: String, require: true },
    Capacity:{ type: String, require: true },
    Last_Maintenance:{ type: String, require: true }
})

module.exports = mongoose.model("Fleet", Fleet);