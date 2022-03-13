import {AppBar, Toolbar, makeStyles, withTheme} from '@material-ui/core'
import React, { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

// components
import Login from './account/Login' 
import ChatBox from './chatbox';

const useStyles = makeStyles({
    loginHeader:{
        height: 200,
        background: '#A38DE4',
        boxShadow: 'none'
    },
    headingName:{
        marginBlock: 0,
        color: 'white',
        zIndex: '10', 
    }
})

const Messenger = ()=>{
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return(
        <React.Fragment>
            <p className={classes.headingName}>LavenderChat</p>
            <AppBar className={classes.loginHeader}>
                <Toolbar></Toolbar>
            </AppBar>

            {/* <Login/> */}
            {account? <ChatBox/>:<Login/>}
        </React.Fragment>
    )
}

export default Messenger;