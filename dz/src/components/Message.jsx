import React from 'react';


const Message = ({txt, author}) => {
    return (
        <li>
            <p>{txt}      --{author}</p>            
        </li>
    )
};

export default Message;