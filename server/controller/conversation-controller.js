import { response } from "express"
import conversation from "../model/conversation.js"

export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    try{

        const exist = await conversation.findOne({ members: {$all: [receiverId, senderId ]}});

        if(exist){
            response.status(200).json('conversation already exists');
            return; 

        }

        const newConversation = new conversation({
            members: [senderId, receiverId ]
        })

        await newConversation.save();
        response.status(200).json('new conversation added successfully!')

    }catch{
        response.status(500).json(error);
    }
}

export const getConversation = async (request, response) => {

    let sender = request.body.sender;
    let receiver = request.body.receiver;

    try{
        const convo = await conversation.findOne({ members: {$all: [receiver, sender ]}});  
        response.status(200).json(convo);
    }catch{
        response.status(500).json(error);
    }

}