import { Drawer } from '@material-ui/core'

const LeftDrawer = ({open, setOpen}) => {

    const handleClose =() =>{
        setOpen(false);
    }

    return(
        <Drawer open={open} onClose={handleClose}>
            hi this is LeftDrawer!
        </Drawer>
    )
}

export default LeftDrawer;