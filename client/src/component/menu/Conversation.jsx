import { useContext } from 'react';
import { Box, makeStyles, Typography } from "@material-ui/core";

// Components
import { AccountContext } from '../../context/AccountProvider';
import { UserContext } from '../../context/UserProvider';
import {setConversation} from '../../service/api.js'

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
    }
});

const Conversation = ({user}) => {

    const classes = convUserStyle();
    const url = user.imageUrl;

    const { account } = useContext(AccountContext);
    const { setPerson } = useContext(UserContext);
    
    const setUser = async () =>{
        setPerson(user);    
        await setConversation({senderId: account.googleId , receiverId: user.googleId }); 
    }

    return (

        <Box className={classes.contact} onClick={()=> setUser()}>
            <img className={classes.contactimg} src= {url}></img>
            <Box>
            <Typography className={classes.name} >{user.name}</Typography>
            </Box>
        </Box>
    )
}
export default Conversation;