import {useState, useContext} from 'react';
import { MoreVert } from '@material-ui/icons';
import {  Menu, MenuItem, makeStyles } from '@material-ui/core';

import { GoogleLogout } from 'react-google-login';
import { clientId } from '../Constants/data'

import { AccountContext } from '../../context/AccountProvider';

const HeaderMenuStyle = makeStyles({
    menu:{
        paddingLeft:"30 px",
        fontSize: "12 px"
    },
    logoutButton:{
        color: 'rgba(0, 0, 0, 0.8) ! important',
        border: "none !important",
        boxShadow: "none ! important",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif ! important'
    }
})

const HeaderMenu = () => {  
    const [open , setOpen] = useState(false);
    const {setAccount } = useContext(AccountContext);
    const classes = HeaderMenuStyle();

    const handleClose= () => {
        setOpen(false);
    }

    const HandleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const OnLogoutSuccess=()=>{
        alert("You have logged out successfully!");
        console.clear();
        setAccount("");
    }
    return(
    <>
    <MoreVert onClick={HandleClick} />
    <Menu
        className={classes.menu}
        // prop anchorEl depects if the menu is open
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin ={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin ={{
            vertical:'top',
            horizontal: 'right'
        }}

      >
        <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>My account</MenuItem>
        <GoogleLogout 
            className={classes.logoutButton}
            clientId={clientId}
            buttonText='Logout'
            onLogoutSuccess={OnLogoutSuccess}

        />
    </Menu>
    </>
    )
}

export default HeaderMenu;