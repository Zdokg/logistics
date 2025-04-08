const LUser = require("../models/user");



async function RegisterDriver(req, res) {
    console.log("tsajel", req.body);
    const {email , password, photo, name, phone} = req.body;
    
    try{
        const user = new LUser({email, password, phone, name, photo});
        await user.save();
        res.status(201).json({message: "signed up", user});
    }
    catch (error) {
        return res.status(500).json({ error: "Error" });}
}

async function show1(req, res) {
    try{
        const user = await LUser.find({});
        res.send(user);
    }     catch (error) {
        return res.status(500).json({ error: "Error" });}
}


async function RegisterClient(req, res) {
    console.log("tsajel", req.body);
    const {email , password, company, name} = req.body;
    
    try{
        const user = new LUser({email, password, company, name});
        await user.save();
        res.status(201).json({message: "signed up", user});
    }
    catch (error) {
        return res.status(500).json({ error: "Error" });}
}


module.exports = {RegisterClient, RegisterDriver, show1}; 