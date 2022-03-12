import { useEffect } from 'react';
import { getUsers } from '../../service/api';
import { Box, makeStyles, Typography } from "@material-ui/core";

const convUserStyle = makeStyles({
    contact:{
        display:'flex',
        flexDirection:'row',
        padding: '10px',
        borderBottom: '1px solid #9F9F9F',
        marginInline: '15px',
        '&:hover':{
            curser: 'pointer',
            backgroundColor: '#E6E6FA',
        }
    },
    contactimg: {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
    },
    name:{
        marginLeft:"10px",
    }
});

const Conversation = ({user}) => {

    const classes = convUserStyle();

    return (

        <Box className={classes.contact}>
            <img className={classes.contactimg} src= {user.imageUrl}></img>
            <Box>
            <Typography className={classes.name} >{user.name}</Typography>
            </Box>
        </Box>
    )
}
export default Conversation;