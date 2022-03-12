import { Box, makeStyles, InputBase } from "@material-ui/core";
import {Search as SearchIcon} from '@material-ui/icons';

const SearchBarStyle = makeStyles( theme => ({

    search:{
        width:"100px",
        position: 'relative',
        borderRadius: "20px",
        backgroundColor: '#EDE1F7',
        display: 'flex',
        border: "2px solid #EDE1F7",
        '&:hover': {
            backgroundColor: 'white',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon:{
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#868686'
    },
    base_input  :{
        color: "inherit",
        width: "100%"
    },
    inputInput:{
        position: 'relative',

        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        // transition: theme.transitions.create('width'),
        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     width: '12ch',
        // }
    }
}))


const Search = ({setText}) =>{
    const classes = SearchBarStyle();

    return(
        <>
            <Box className={classes.search}>
                <Box className={classes.searchIcon}>
                    <SearchIcon />
                </Box>
                <InputBase
                    className={classes.base_input}
                    placeholder="Search or start a new chat...."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange= {(e)=> setText(e.target.value)}
                />
            </Box>
        </>
    )
}

export default Search;