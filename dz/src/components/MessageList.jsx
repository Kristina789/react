import React, { useState } from 'react';

import TextField           from '@material-ui/core/TextField';
import Button              from '@material-ui/core/Button';

import Message             from './Message';

import '../style/MessageList.css';


const MessageList = (props) => {
    const [author, setAuthor]   = useState(''); 
    const [message, setMess]    = useState(''); 

    const handleClick = () => {
        const sender  = author.trim();
        const content = message.trim();

        if (content.length > 0 && sender.length > 0 ) 
        {
            props.sendMsg(content, sender); 
        }

        setMess(''); 
        setAuthor('');
    };

    const updateAuthor = (event) => {
        setAuthor(event.target.value);
    };

    const updateMessage = (event) => {
        setMess(event.target.value);
    };

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) handleClick(); // Enter
    };        

    return (
        <div className='layout'>        
            <ul className='message-field'>
                {props.messages.map((value, id) => 
                    <Message txt={value.message} author={value.author} id={value.id} chatId={props.chatId} key={`message_${id}`} />
                )}  
            </ul>

            <form onSubmit={(event) => event.preventDefault()}>
                <TextField id="outlined-basic" name='message' label="Message" variant="outlined" value={message} onChange={updateMessage} autoFocus />              
                <p/>
                <TextField id="outlined-basic" name='author' label="Author" variant="outlined" value={author} onChange={updateAuthor} 
                onKeyUp={handleKeyUp} />
                <p/>
                <div>
                    <Button variant="contained" color="primary" type="submit" onClick={handleClick}>
                        Click me
                    </Button>
                </div>                
            </form>  
        </div>
    );
};

export default MessageList;