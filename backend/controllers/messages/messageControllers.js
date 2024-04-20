import Conversation from '../../models/Conversation.js';
import Message from "../../models/Message.js";
export const sendMessage = async(req,res) => {
       try {
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all : [senderId,receiverId]}
        })
        if(!conversation) {
            conversation = await Conversation.create({
                participants : [senderId,receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message 
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }
        // await newMessage.save();
        // await conversation.save();
        await Promise.all([newMessage.save(),conversation.save()]);
        res.status(201).json(newMessage);
       }catch(err) {
        console.log("Error in controllers/messages/messageController.js." + err.message);
       }
}


export const getMessage = async(req,res) => {
    try {
        const {id:userToChatId} = req.params;
        
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all : [userToChatId,senderId]}
        }).populate("messages");

        if(!conversation) {
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);
    }catch(err) {
        console.log("Error in messageController." + err.message);
    }
}

