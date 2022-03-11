// import {EditIcon}  from '@material-ui/icons';
import { Box, Typography, makeStyles  } from '@material-ui/core'
import { useContext } from 'react';

// components
import { AccountContext } from "../../context/AccountProvider";

const styleEditProfie = makeStyles({
    ProfileContainer:{
        paddingInline: '30px',
    },
    editAvatarContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editAvatar: {
        width: "220px",
        height: "220px",
        margin: "40px",
        borderRadius: "50%",
    },
    ProfileInfo1:{
        paddingBlock: '20px',
    },
    ProfileInfo2:{
        paddingBlock: '20px',
    },
    label:{
        color: 'gray',
        fontSize: '14px'
    }
})

const EditProfile = () => {

    const {account} = useContext(AccountContext);

    const classes = styleEditProfie();
 
    return(
        <Box className = {classes.ProfileContainer}>
            <Box className={classes.editAvatarContainer}>
                    <img className={classes.editAvatar} src={account.imageUrl} alt="your-profile" />
            </Box>
            <Box className = {classes.ProfileInfo1} >
                <Typography className={classes.label}  >Name</Typography> 
                <Typography>{account.name}</Typography>
                {/* <EditIcon/> */}
            </Box>
            <Box className = {classes.ProfileInfo2} >  
                <Typography className={classes.label}>Description</Typography>
                <Typography>eat! sleep! code! get annoyed! dream! repeat! </Typography>
            </Box>
        </Box>
    )
}

export default EditProfile;