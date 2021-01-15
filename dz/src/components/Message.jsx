import React from 'react';

<<<<<<< HEAD
import '../style/Message.css';


const Message = ({txt, author}) => {
    return (
        <li className='message'
            style={ { alignSelf: author === 'bot' ?
                    'flex-start' : 'flex-end' } }
        >
            <div>{txt}</div>
            <div className='message-author'>{author}</div> 
=======

const Message = ({txt, author}) => {
    return (
        <li>
            <p>{txt}      --{author}</p>            
>>>>>>> main
        </li>
    )
};

export default Message;