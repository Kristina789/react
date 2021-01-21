import React, { useState }        from 'react';

import { Link }     from 'react-router-dom';

import List         from '@material-ui/core/List';
import ListItem     from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button   from '@material-ui/core/Button';

import '../style/ChatList.css';


const ChatList = () => {
    const [chats_list, setChatsList] = useState([1, 2, 3]);

    const addNewChat = () => {
        setChatsList(list => [...list, chats_list[chats_list.length - 1] + 1]);

        console.log(chats_list);
    }

    return (
        <div className='list'>
            <Button color="primary" type="submit" onClick={addNewChat}>New chat</Button>

            <List component="nav" aria-label="secondary mailbox folders">                
                {chats_list.map((value, id) => 
                    <ListItem button key={id}>
                        <Link to={`/chat/${value}`} >
                            <ListItemText primary={`Chat ${value}`} />
                        </Link>
                    </ListItem>                      
                )}
            </List>
            
        </div>
    )
};

export default ChatList;