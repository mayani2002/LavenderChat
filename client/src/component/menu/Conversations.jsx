import { Box, makeStyles } from "@material-ui/core";
import { useEffect, useState, useContext } from 'react';

// components
import { getUsers } from "../../service/api.js";
import Conversation from "./Conversation";
import { AccountContext } from "../../context/AccountProvider";

const listStyle = makeStyles({
    chatBox:{
        height:'100%',
        overflow: 'overlay',
    }
})

const Conversations = ({text}) => {
    const classes = listStyle();

    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);

    useEffect( async () =>{
        const fetchData = async () => {
            const data = await getUsers();
            const filteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()) );
            setUsers(filteredData);
        }
        fetchData();
    },[text])

    return (
        <><Box className={classes.chatBox}>
        {            
            users.map(user=>(
                user.googleId != account.googleId) &&
                    <Conversation user = {user} />
                
            )
        }
        </Box>
        </>
    )
}

export default Conversations;