import { Box } from '@material-ui/core';
import { useState, useEffect, useContext } from 'react';
// component
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { UserContext } from '../../context/UserProvider';
import { AccountContext } from '../../context/AccountProvider';
import { getConversation } from '../../service/api.js';

const Chat = () => {
    const { person } = useContext(UserContext);
    const { account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    useEffect(()=>{
        const getConversationDetails = async () => {
            let conversationDetails = await getConversation({ sender: account.googleId , receiver: person.googleId});
            setConversation(conversationDetails);
        }
        getConversationDetails();
    },[person.googleId])

    return (
        <Box>
            <ChatHeader/>
            <Messages conversation={conversation} person={person}/>

        </Box>
    )
}

export default Chat;