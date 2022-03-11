import { useContext } from 'react';
import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

// components
import { AccountContext } from '../../context/AccountProvider';
import { clientId } from '../Constants/data';
import { addUser } from '../../service/api';

const useStyles = makeStyles({
    instList:{
        marginTop: '3vw'
    },
    component: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    leftComponent: {
        padding: '3vw 0 3vw 3vw'
    },
    qrCode_Login: {
        height: '18vw',
        width: '18vw',
        minHeight: 150,
        minWidth: 150,
        maxHeight: 450,
        maxWidth: 450,
        padding: '3vw 3vw 3vw 0'
    },
    imgLogin:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    Google_Login:{
        width: 45
    }

})

const style = {
    dialogPopUp: {
        maxWidth: '800px',
        height: '80vh',
        width: '80vw',
        // boxShadow: 'none',
        borderRadius: 0
    }
}

const Login = ({classes}) => {
    const classname = useStyles();
    const qrurlLogin = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';

    const {account , setAccount } = useContext(AccountContext)

    const onLoginSuccess = async (res) => {
        console.log("Login sucessfuly!");
        setAccount(res.profileObj);
        await addUser(res.profileObj);
    }

    const onLoginFailer = () => {
        console.log("Login Failed!");
    }

    return (
        <Dialog 
            open={true}
            classes={{paper: classes.dialogPopUp}}
            BackdropProps=  {{style: {backgroundColor: 'unset',maxWidth: '800px'}}}
        >
        <Box className={classname.component}>
            <Box className={classname.leftComponent}>
                <Typography>
                    To use LavenderChat on your computer: 
                </Typography>
                <List className={classname.instList}>
                    <ListItem>1. Open LavenderChat on your phone.</ListItem>
                    <ListItem>2. Tap Menu or Settings and selec Linked Devices</ListItem>
                    <ListItem>3. Point your screen to this screen to capture the code</ListItem>
                </List>
            </Box>
            <Box className={classname.imgLogin}>
                <img src={qrurlLogin} alt='qr'  className={classname.qrCode_Login} />
                <GoogleLogin className={classname.Google_Login}
                    clientId = {clientId}
                    buttonText = ""
                    isSignedIn = {true}
                    onSuccess = {onLoginSuccess}
                    onFailure = {onLoginFailer}
                    cookiePolicy = {'single_host_origin'}
                />
            </Box>
        </Box>
        </Dialog>
    )
} 

export default withStyles(style)(Login);