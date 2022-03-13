import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
// component

import Menu from './menu/Menu';
import Chat from './chat/Chat';
import EmptyChat from './chat/EmptyChat';

const styles = {
    dialogChatBox: {
        top:0,
        marginTop: '55px',
        maxWidth: '3900px',
        maxHeight: '4096px',
        width: '100%',
        boxShadow: 'none',
        margin: 0,
        borderRadius: 0
    },
}

const chatBoxStyle = makeStyles({
    messageBox:{
        display:'flex',
        flexDirection: 'Row',
        height: "100vh"
    },
    leftComponent_Name: {
        width: '400px',
        borderRight: '0.7px solid #ACACAC',
        display: 'flex',
        flexDirection: 'column'
    },
    RightComponent_Chat: {
        width:"calc(100% - 400px) !important",
        display: 'flex',
        flexDirection: 'column'
    }
})

const ChatBox = ({classes}) => {
    const classname = chatBoxStyle();
    const { person } = useContext(UserContext);

    return (
        <Dialog
            open={true}
            classes={{paper: classes.dialogChatBox}}
            BackdropProps=  {{style: {backgroundColor: 'unset'}}}

        >
            <Box className={classname.messageBox}>
                <Box className={classname.leftComponent_Name}>
                    <Menu/>
                </Box>
                <Box className={classname.RightComponent_Chat}>
                    {
                        Object.keys(person).length ? <Chat/> : <EmptyChat/>
                     }
                </Box>
            </Box>
        
        </Dialog>
    )
}

export default withStyles(styles)(ChatBox);