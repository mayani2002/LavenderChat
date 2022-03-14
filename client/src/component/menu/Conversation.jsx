import { useContext, useEffect, useState } from 'react';
import { Box, makeStyles, Typography } from "@material-ui/core";

// Components
import { AccountContext } from '../../context/AccountProvider';
import { UserContext } from '../../context/UserProvider';
import {getConversation, setConversation} from '../../service/api.js'

const convUserStyle = makeStyles({
    contact:{
        display:'flex',
        flexDirection:'row',
        padding: '10px',
        borderBottom: '1px solid #9F9F9F',
        marginInline: '15px',
        '&:hover':{
            curser: 'pointer',
            backgroundColor: '#E6E6FA',
        }
    },
    contactimg: {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
    },
    name:{
        marginLeft:"10px",
    },
    contactInfo:{
        dispaly: 'flex',
        flexDirection: 'row',
        width: '100%'

    },
    lessInpInfo1:{
        fontSize: '12px',
        color: 'grey',
        width: '49%',
        overflow: 'hidden'
    },    
    lessInpInfo2:{
        fontSize: '10px',
        color: 'grey',
        textAlign: 'right'
    },
    last: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingInline: '10px',
    }
});

const Conversation = ({user}) => {

    const classes = convUserStyle();
    const url = user.imageUrl;

    const { account, newMessageFlag } = useContext(AccountContext);
    const { setPerson } = useContext(UserContext);

    const   [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({sender: account.googleId, receiver: user.googleId});
            setMessage({text: data.message, timestamp: data.updatedAt });
        }
        getConversationMessage();
    },[newMessageFlag])
    
    const setUser = async () =>{
        setPerson(user);    
        await setConversation({senderId: account.googleId , receiverId: user.googleId }); 
    }

    return (

        <Box className={classes.contact} onClick={()=> setUser()}>
            <img className={classes.contactimg} src= {url}></img>
            <Box className={classes.contactInfo}>

                <Typography className={classes.name} >{user.name}</Typography>
                <Box className={classes.last}>
                    {message.text && <Typography className={classes.lessInpInfo1}>{message.text}</Typography>}

                    {message.text && <Typography className={classes.lessInpInfo2}>                
                    { new Date(message.timestamp).getHours() }:{new Date(message.timestamp).getMinutes() }
                </Typography>}
                </Box>

            </Box>
        </Box>
    )
}
export default Conversation;

