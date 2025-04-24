const Hiring = require("../models/hiring");


async function hiring (req, res) {
    
    const { Title, Department,Location,Experience,Remote,Description } = req.body;
    
      try {
        const HIRE = new Hiring({
            Title,
            Department, 
            Location, 
            Experience, 
            Remote, 
            Description
        });
        await HIRE.save();
        res.status(201).json({ message: "Hiring post added", HIRE });
      } catch (error) {
        return res.status(500).json({ error: "Error adding the hiring post" });
      }
}

async function showH(req, res) {
  try {
    const hirings = await Hiring.find({});
    res.json(hirings);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving Hiring posts" });
  }
}


module.exports = { hiring, showH };