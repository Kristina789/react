import React, { useState }      from 'react';

import MessageList              from '../MessageList';
import Header                   from '../Header';


const Messages = (props) => {
    const [chats, setChats] = useState({});
    const [msgList, setMsgList] = useState([]);
    //const [messageChat, setMsgChat] = useState([]);;
    
    const addChat = (msg) => {
        chats[msg.chatId] = chats[msg.chatId] || { title: `Chat ${msg.chatId}`, messages: [] };
        
        chats[msg.chatId].messages.push(msg.id);
        
        setChats({ ...chats, [msg.chatId] : chats[msg.chatId] });
        
        console.log(chats);
    };

    const sendMsg = (content, sender, chatId=props.chatId, timer=100) => {
        const msg = { message: content, author: sender, id: addId(), chatId: chatId };

        setTimeout(() => {
            setMsgList(list => [...list, msg]);
            addChat(msg);
            //filteredMsg(msg);
        }, timer);      

        console.log(msgList);

        return msg;
    };

    const sendMsgBot = (msg) => {
        sendMsg(`Hello, ${msg.author + ''}! I'm bot.`, 'bot', msg.chatId, 3000);
    };
    
    let addId = () => Date.now() + Math.floor(Math.random() * 99);

    /*const filteredMsg = (msg) => {
        if (messageChat.length > 0 && msg.chatId === props.chatId && messageChat[messageChat.length - 1].chatId === props.chatId) 
        {
            setMsgChat(list => [...list, msg])
        } else if (messageChat.length === 0) 
        {
            setMsgChat(list => [...list, msg])
        } else 
        {
            setMsgChat([])
        }
        let filteredMsg = msgList.filter((value) => value.chatId === props.chatId);

        setMsgChat([...messageChat, filteredMsg]);

        console.log(messageChat);
    };*/

    return (
        <>
            <Header chatId={props.chatId} />

            <MessageList newChat={addChat} sendMsg={sendMsg} sendMsgBot={sendMsgBot} 
                        chatId={props.chatId} messages={msgList}
            />
        </>
    )
};

export default Messages;