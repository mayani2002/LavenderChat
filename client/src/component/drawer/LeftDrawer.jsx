import { Drawer, Box, Typography, makeStyles  } from '@material-ui/core';
import {ArrowBack}  from '@material-ui/icons';

// components
import EditProfile from './EditProfile';

const profileStyle = makeStyles({
    Header:{
        display: 'flex',
        flexDirection:'row',
        height: '65px',
        backgroundColor: '#8C7BBE',
    },
    ArrowBackIcon:{
        padding: '10px',
    },
    HeadingProfile:{
        margin: '10px'
    },

})

const LeftDrawer = ({open, setOpen}) => {

    const classes = profileStyle();

    const handleClose =() =>{
        setOpen(false);
    }

    return(
        <Drawer open={open} onClose={handleClose}>
            <Box className={classes.Header}>
                <ArrowBack className={classes.ArrowBackIcon} onClick={handleClose}  />
                <Box className={classes.HeadingProfile}>
                    <Typography>Profile</Typography>
                </Box>
            </Box>
            <EditProfile>
               
            </EditProfile>
        </Drawer>
    )
}

export default LeftDrawer;