import {AppBar, Toolbar, makeStyles} from '@material-ui/core'
import React, { useContext } from 'react';
import { AccountContext } from '../context/AcountProvider';

// components
import Login from './account/Login' 
import ChatBox from './chatbox';

const useStyles = makeStyles({
    loginHeader:{
        height: 200,
        background: '#A38DE4',
        boxShadow: 'none'
    }
})

const Messenger = ()=>{
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return(
<React.Fragment>
        <AppBar className={classes.loginHeader}>
            <Toolbar></Toolbar>
        </AppBar>
{/* <Login/> */}
        {account? <ChatBox/>:<Login/>}
</React.Fragment>
    )
}

export default Messenger;