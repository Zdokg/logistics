const user = require(.../models/messagerie/user);
const getUser =async (req,res)=>{
    try{
        const users = await user.find();
        if(!users){res.status(400).json({message: "non trouvé"})};
        res.status(200).json({message:"utilisateur trouvé"});
    }catch(error){
        res.status(500).json({error: "service"})
    };
};
module.exports = getUser;