import React                  from 'react';

import { bindActionCreators } from "redux";
import { connect }            from 'react-redux';

import { push }               from 'connected-react-router';

import List                   from '@material-ui/core/List';
import ListItem               from '@material-ui/core/ListItem';
import ListItemText           from '@material-ui/core/ListItemText';
import Button                 from '@material-ui/core/Button';

import { addChat, deleteChat } from '../store/actions/chatActions';
import { deleteMessages }      from '../store/actions/messagesActions';

import '../style/ChatList.css';


const ChatList = (props) => {
    const chats_list     = props.chatsStore;

    const addNewChat     = () => props.addChat();
    const handleNavigate = (link) => props.push(link);
    const deleteChat     = (id) => {
        props.deleteChat(+id);
        props.deleteMessages(+id);
    };

    return (
        <div className='list'>
            <Button color="primary" type="submit" onClick={addNewChat}>New chat</Button>

            <List component="nav" aria-label="secondary mailbox folders">                
                {
                    Object.entries(chats_list).map(([key]) => 
                     <div key={`Chat ${key}`}>
                        <ListItem button onClick={() => handleNavigate(`/chat/${key}`)} >
                            <ListItemText primary={`Chat ${key}`} id={+key}  />
                        </ListItem>
                        <Button color="primary" type="submit" onClick={() => deleteChat(key)}>Delete</Button>
                     </div>
                    )
                }
            </List>            
        </div>  
    )
};


const mapStateToProps = ({ chatReducer }) => ({
    chatsStore: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addChat, deleteChat, push, deleteMessages },
    dispatch);
            
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);