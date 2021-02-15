import React, { useEffect }          from 'react';

import { bindActionCreators }        from "redux";
import {connect}                     from 'react-redux';

import CircularProgress              from '@material-ui/core/CircularProgress';

import MessageList                   from '../MessageList';
import Header                        from '../Header';

import { loadChats }                 from '../../store/actions/chatActions';
import { sendMessage  }              from '../../store/actions/messagesActions';


const Messages = (props) => {
    const chats   = props.chatsStore;
    const msgList = Object.values(props.messagesStore);
    
    const sendMsg = (content, sender, chatId=props.chatId, timer=100) => {
        setTimeout(() => {
            props.sendMessage(content, sender, chatId, addId());
        }, timer);      
    };
    
    const addId = () => Date.now() + Math.floor(Math.random() * 99);

    useEffect(() => {
        props.loadChats();
    }, [])


    if (props.isLoading) return <CircularProgress />
    else {
        return (        
            <>                
                <Header chatId={props.chatId} />
                <MessageList sendMsg={sendMsg} chatId={props.chatId} 
                            messages={msgList.filter(({ id }) => chats[props.chatId].messages.includes(id))}
                />
            </>
        )
    }
};


const mapStateToProps = ({ chatReducer, messagesReducer, profileReducer }) => ({
    chatsStore: chatReducer.chats,
    messagesStore: messagesReducer.messages,
    isLoading: messagesReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ sendMessage, loadChats }, 
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);