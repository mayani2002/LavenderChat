import { useContext, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { AccountContext } from "../../context/AccountProvider";


const msgStyle = makeStyles({

    msg:{

        backgroundColor: '#D9FFFA',
        borderRadius: '6px',
        marginBottom: '7px',
        flexDirection: 'row',
        padding: '5px',
        maxWidth: '60%',
        width: 'fit-content',
        wordBreak: 'break-word',
    },
    userMsg: {
        backgroundColor: '#D9FFFA',
        borderRadius: '6px',
        marginBottom: '7px',
        display: 'flex',
        padding: '5px',
        maxWidth: '60%',
        width: 'fit-content',
        wordBreak: 'break-word',
        alignSelf: 'end',
        flexDirection: 'row',

    },
    time:{
        width:'100%',
        textAlign: 'right' ,
        fontSize: '10px',
    }

})


const Message = ({message}) => {

//     useEffect(
// (
//     () =>
// )
//     );
    const classes = msgStyle();
    const { account } = useContext(AccountContext);

    const formatDate = (date) => {
        return date < 10 ? '0' + date: date;
    }

    return(
        <Box className={ account.googleId == message.sender ? classes.userMsg : classes.msg} >
            <Typography>{message.text}</Typography>
            <Typography className={classes.time} >{formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}</Typography>
        </Box>
    )

}

export default Message;