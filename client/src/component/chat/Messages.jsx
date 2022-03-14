import { Box, makeStyles } from "@material-ui/core";
import { useState, useContext, useEffect, useRef } from "react";
import { AccountContext } from "../../context/AccountProvider";
import Footer from './Footer';
import { newMessage, getMessages } from "../../service/api.js";
import Message from "./Message";

const MessagesStyle = makeStyles({
    msgOuterBody:{
        backgroundImage: `url(${'https://user-images.githubusercontent.com/85985334/158048578-19c08f62-7ffe-456f-9a27-242678131f94.svg'})`,
        backgroundSize: '50%',  
        overflowY: 'scroll',
    },
    msgBody:{
        height: 'calc(94vh - 110px)',
        paddingInline: '40px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'end',
        
    }
})

const Messages = ({conversation, person}) => {
    const classes= MessagesStyle();

    const [value, setValue] = useState();
    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);

    const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

    const scrollRef = useRef();

    useEffect(() =>{
        socket.current.on('getMessage', data =>{
            setIncomingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
            console.log(data.text);

            setNewMessageFlag(prev => !prev);

        })
    },[newMessageFlag])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth'})
    },[messages])


    useEffect(() => {
        incomingMessage && conversation?.member?.includes(incomingMessage.sender) &&
            setMessages(prev => [...prev, incomingMessage]) 

    },[incomingMessage,conversation])


    useEffect(() => {
        const getMessageDetails = async () => {
            let msg = await getMessages(conversation._id);
            setMessages(msg.data);
        }
        getMessageDetails();
    },[conversation?._id, person._id, newMessageFlag])
// 

    const receiverId = conversation?.members?.find(member => member !== account.googleId);

    const sendText = async (e) => {
        let code = e.keyCode || e.which
        console.log(value);
        if(!value) return;

        if(code === 13){
            let message = {
                sender: account.googleId,
                conversationId: conversation._id,
                text: value
            }

            //emiting signal
            socket.current.emit('sendMessage',{
                senderId: account.googleId,
                receiverId,
                text:value
            })

            await newMessage(message);
            setValue('');
            setNewMessageFlag(prev => !prev);
        }
    }

    return (
        <>
            <Box className={classes.msgOuterBody} >

                <Box className={classes.msgBody} >
                    {
                        messages && messages.map(message  => (
                            <Box ref={scrollRef}>
                                <Message message={message} />
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Footer sendText = {sendText} setValue = {setValue} value={value} />
        </>

    )

}


export default Messages;