import { useContext, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Chat } from '@material-ui/icons';
import { AccountContext } from "../../context/AccountProvider";


// Component
import HeaderMenu from "./HeaderMenu";
import LeftDrawer from "../drawer/LeftDrawer";

const headerStyles = makeStyles({
    chatBoxHeader:{
        backgroundColor:'#BDB5D5',
        display: 'flex',
        flexDirection: 'Row',
        justifyContent: 'Space-between'
    },
    chatBoxOptions: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        '& > *':{
            margin: '10px',
        }
    }, 

    avatar: {
        width: "45px",
        height: "45px",
        margin: "10px",
        borderRadius: "50%",
    }
})
const Header = () => {
    const classes = headerStyles();
    const {account} = useContext(AccountContext);

    const [open, setOpen] = useState(false);

    const toggleDrawer = () =>{
        setOpen(true);
    }

    return(
        <>
        <Box className={classes.chatBoxHeader}>
            <img className={classes.avatar} onClick={() => toggleDrawer()} src={account.imageUrl} alt="your-profile" />
            <Box className={classes.chatBoxOptions}>
                <Chat/>
                <HeaderMenu/>

            </Box>
        </Box>
        <LeftDrawer open={open} setOpen={setOpen} />
        </>
    )
}

export default Header;
