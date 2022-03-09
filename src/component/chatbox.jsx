import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from '@material-ui/core';

// component

import Menu from './menu/Menu';

const styles = {
    dialogChatBox: {
        top:0,
        marginTop: '55px',
        maxWidth: '3900px',
        maxHeight: '4096px',
        width: '100vw',
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
        width: '560px',
        borderRight: '0.7px solid #ACACAC',
    },
    RightComponent_Chat: {
        width:"100vw",
    }
})

const ChatBox = ({classes}) => {
    const classname = chatBoxStyle();

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
                <Box className={classname.RightComponent_Chat}>Chat</Box>
            </Box>
        
        </Dialog>
    )
}

export default withStyles(styles)(ChatBox);