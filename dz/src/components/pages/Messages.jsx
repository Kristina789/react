import React                    from 'react';

import { bindActionCreators }   from "redux";
import {connect}                from 'react-redux';

import MessageList              from '../MessageList';
import Header                   from '../Header';

import { addMessage }           from '../../store/actions/messageActions';
import { sendMessage }          from '../../store/actions/messagesActions';


const Messages = (props) => {
    const chats   = props.chatsStore;
    const msgList = props.messagesStore;
    
    const sendMsg = (content, sender, chatId=props.chatId, timer=100) => {
        const msg = { message: content, author: sender, id: addId(), chatId: chatId };

        setTimeout(() => {
            props.sendMessage(content, sender, chatId, msg.id);
            props.addMessage(msg.id, msg.chatId);
        }, timer);      

        console.log(msgList, chats);

        return msg;
    };

    const sendMsgBot = (msg) => {
        sendMsg(`Hello, ${msg.author + ''}! I'm bot.`, 'bot', msg.chatId, 3000);
    };
    
    let addId = () => Date.now() + Math.floor(Math.random() * 99);

    return (
        <>
            <Header chatId={props.chatId} />
            <MessageList sendMsg={sendMsg} sendMsgBot={sendMsgBot} 
                    chatId={props.chatId} messages={msgList.filter(({ id }) => chats[props.chatId].messages.includes(id))}
            />
        </>
    )
};


const mapStateToProps = ({ chatReducer, messagesReducer }) => ({
    chatsStore: chatReducer.chats,
    messagesStore: messagesReducer.messages,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addMessage, sendMessage }, 
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);