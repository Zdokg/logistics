const LUser = require("../models/user");




async function sub(req, res) {
    try {
        console.log("Request Body:", req.body); // Log incoming data
        
        const { email, comment } = req.body;
        if (!email) {
            console.log("Validation Failed: Missing fields");
            return res.status(400).json({ message: "Fill all fields" });
        }

        const newContact = new User({ email});
        await newContact.save();
        console.log("email subscribed");

        res.status(201).json({ message: "email subscribed" });

    } catch (error) {
        console.error("Error in add():", error);
        return res.status(500).json({ error: "Database Save Error" });
    }
}



module.exports = {sub}; 