import {EmojiEmotions, AttachFile, Mic} from '@material-ui/icons';
import {Box, InputBase, makeStyles} from '@material-ui/core';

const FooterStyle = makeStyles({
    footerbox:{
        height:'60px',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
    backgroundColor: '#B69EB6',
        // justifyContent: 'space-between',
        '& *':{
            paddingInline: '10px',
        }
    },
    msginput:{
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '20px',   
    }

})

const Footer = ({sendText, setValue, value}) => {
    const classes = FooterStyle();
 
    return(
        <Box className={classes.footerbox } >
            <EmojiEmotions/>
            <AttachFile/>
            <InputBase 
                placeholder = 'Type the messages here....' 
                className={classes.msginput } 
                inputProps={{'aria-label':'search'}}
                onKeyPress = {(e)=>sendText(e)}
                onChange= {(e)=> {setValue(e.target.value); console.log(e)}}
                value = {value}
            />
            <Mic/>

        </Box>
    )
}

export default Footer;