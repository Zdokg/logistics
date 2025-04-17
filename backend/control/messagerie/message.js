
const message =require('.../models/messagerie/message');

const sendmessage = async (req,res)=>{
    const {sender,reciever,content} = req.body;
    try{
        const message = new message({ sender, reciever, content});
        await message.save();
        res.status(201).json({message: "message envoyé!"})
    }catch(error){
        res.status(500).json({error: "Serive"})
    }
}; 
const convo = async (req,res)=>{
    const {user1,user2} = req.params;
    try{
        const messages = await message.find({
            $or: [
                {sender: user1 , reciever: user2},
                {sender: user2 , reciever: user1}
            ]
        }).sort('time');

        res.json(messages);
        res.status(201).json({message: " conversation affichée "});
    }catch(error){
        res.status(500).json({error: " service "});
    }
};
module.exports = {convo,sendmessage};