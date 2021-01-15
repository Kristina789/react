import React        from 'react';

import List         from '@material-ui/core/List';
import ListItem     from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import '../style/ChatList.css';


const ChatList = () => {
    return (
        <div className='list'>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Dave" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Kate" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Alex" />
                </ListItem>
            </List>
        </div>
    )
};

export default ChatList;