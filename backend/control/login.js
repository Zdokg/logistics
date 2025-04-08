const LUser = require("../models/user");


async function Login(req, res) {
    const {email , password} = req.body;
    
    try {
        const user = await LUser.findOne({email});
        if( !user){
        res.status(400).json({message: "Account don't exist"});
    }
    if( user.password !== password){
        res.status(400).json({message: "Password Incorrect"});
    }
    res.status(200).json({message: "Logged In!"})
    }catch (error) {
        return res.status(500).json({ error: "Error" });}
    
}


async function show(req, res) {
    try{
        const user = await LUser.find({});
        res.send(user);
    }     catch (error) {
        return res.status(500).json({ error: "Error" });}
}




async function FPass(req, res) {
    const { email, newPass } = req.body;
  
    try {
  
      // Find the user by email
      const user = await LUser.findOne({ email });
  
      // If user does not exist
      if (!user) {
        return res.status(400).json({ message: "Email is not registered" });
      }
      user.password = newPass;
      // Save the updated user
      await user.save();
  
      res.status(201).json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error updating password:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }




module.exports = {Login, show, FPass}; 