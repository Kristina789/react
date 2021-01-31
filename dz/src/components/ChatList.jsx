import React                  from 'react';

import { bindActionCreators } from "redux";
import { connect }            from 'react-redux';

import { Link }               from 'react-router-dom';

import List                   from '@material-ui/core/List';
import ListItem               from '@material-ui/core/ListItem';
import ListItemText           from '@material-ui/core/ListItemText';
import Button                 from '@material-ui/core/Button';

import { addChat }            from '../store/actions/chatActions';

import '../style/ChatList.css';


const ChatList = (props) => {
    const chats_list = props.chatsStore;

    const addNewChat = () => props.addChat();

    return (
        <div className='list'>
            <Button color="primary" type="submit" onClick={addNewChat}>New chat</Button>

            <List component="nav" aria-label="secondary mailbox folders">                
                {
                    Object.entries(chats_list).map(([key]) => 
                        <ListItem button key={key}>
                            <Link to={`/chat/${key}`} >
                                <ListItemText primary={`Chat ${key}`} />
                            </Link>
                        </ListItem>                      
                    )
                }
            </List>            
        </div>  
    )
};


const mapStateToProps = ({ chatReducer }) => ({
    chatsStore: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addChat },
    dispatch);
            
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);