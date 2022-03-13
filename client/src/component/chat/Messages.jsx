import { Box, makeStyles } from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
import { AccountContext } from "../../context/AccountProvider";
import Footer from './Footer';
import { newMessage, getMessages } from "../../service/api.js";
import Message from "./Message";

const MessagesStyle = makeStyles({
    msgOuterBody:{
        backgroundImage: `url(${'https://user-images.githubusercontent.com/85985334/158048578-19c08f62-7ffe-456f-9a27-242678131f94.svg'})`,
        backgroundSize: '50%',
        overflow: 'overlay',
    },
    msgBody:{
        height: 'calc(94vh - 110px)',
        paddingInline: '40px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'end',
        
    }
})

const Messages = ({conversation}) => {
    const classes= MessagesStyle();

    const [value, setValue] = useState();
    const [messages, setMessages] = useState([]);

    const {account } = useContext(AccountContext);

    useEffect(() =>{
        const getMessageDetails = async () => {
            let msg = await getMessages(conversation._id);
            setMessages(msg.data);
        }
        getMessageDetails();
    },[conversation?._id])

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

            await newMessage(message);
            setValue('');
        }
    }

    return (
        <>
            <Box className={classes.msgOuterBody} >

                <Box className={classes.msgBody} >
                    {
                        messages && messages.map(message  => (
                                <Message message={message} />
                        ))
                    }
                </Box>
            </Box>
            <Footer sendText = {sendText} setValue = {setValue} value={value} />
        </>

    )

}


export default Messages;