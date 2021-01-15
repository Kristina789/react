import React from 'react';

import '../style/Message.css';


const Message = ({txt, author}) => {
    return (
        <li className='message'
            style={ { alignSelf: author === 'bot' ?
                    'flex-start' : 'flex-end' } }
        >
            <div>{txt}</div>
            <div className='message-author'>{author}</div> 
        </li>
    )
};

export default Message;