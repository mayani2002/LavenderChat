import { Menu, MenuItem, Box, makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
import { MoreVert,Search as SearchIcon } from '@material-ui/icons';

// components   
import { UserContext } from "../../context/UserProvider";
import { AccountContext } from "../../context/AccountProvider";

const ChatHeaderStyle = makeStyles({
 ChatHeaderBox: {
    width: '100%',
    // padding: '10px',
    backgroundColor:'#BDB5D5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

}, 
ChatHeaderRBox: {
    // padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& *':{
        paddingInline: '10px'
    }
},
ChatHeaderLBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& *':{
        paddingInline: '10px'
    }
},
    avatar: {
        width: "45px",
        height: "45px",
        margin: "10px",
        borderRadius: "50%",
    }

})

const ChatHeader = () => {
    const { person } = useContext(UserContext);
    const classes = ChatHeaderStyle();

    const {activeUsers} = useContext(AccountContext);

return(
        <Box className={classes.ChatHeaderBox} >
            <Box className={classes.ChatHeaderLBox}>
                <img className={classes.avatar} src={person.imageUrl}></img>
                <Box>
                    <Typography>{person.name}</Typography>
                    <Typography>
                        {activeUsers?.find(user => user.userId === person.googleId)? 'Online': 'Offline'}
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.ChatHeaderRBox}>
                <SearchIcon/>
                <MoreVert />
                    <Menu
                        // className={classes.menu}
                        // // prop anchorEl depects if the menu is open
                        // anchorEl={open}
                        // keepMounted
                        // open={Boolean(open)}
                        // onClose={handleClose}
                        // getContentAnchorEl={null}
                        // anchorOrigin ={{
                        //     vertical: 'bottom',
                        //     horizontal: 'center'
                        // }}
                        transformOrigin ={{
                            vertical:'top',
                            horizontal: 'right'
                        }}>
                    </Menu>

            </Box>
        </Box>
    )
}

export default ChatHeader;