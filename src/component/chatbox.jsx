import { Dialog , withStyles} from "@material-ui/core";

const styles = {
    dialogChatBox: {
        maxWidth: '800px',
        height: '80vh',
        width: '80vw',
        // boxShadow: 'none',
        borderRadius: 0
    }
}

const ChatBox = ({classes}) => {
    return (
        <Dialog
            open={true}
            classes={{paper: classes.dialogChatBox}}
        >
        Hello
        </Dialog>
    )
}

export default withStyles(styles)(ChatBox);