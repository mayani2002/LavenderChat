import { response } from "express"
import Message from "../model/message.js";
import conversation from "../model/conversation.js";

export const newMessage = async (request, response) =>{

    const newMessage = new Message(request.body);

    try{
        await newMessage.save();
        await conversation.findByIdAndUpdate(request.body.conversationId, {message: request.body.text});
        response.status(200).json("Message saved successfully!!");
    }catch{
        response.status(500).json(error);
    }
}

export const getMessages = async (request, response) =>{


    try{
        const messages = await Message.find({conversationId: request.params.id  })

        response.status(200).json(messages);
    }catch{
        response.status(500).json(error);
    }
}

