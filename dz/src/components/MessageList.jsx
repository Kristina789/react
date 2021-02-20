import React, { useState } from 'react';

import {connect}           from 'react-redux';

import TextField           from '@material-ui/core/TextField';
import Button              from '@material-ui/core/Button';

import Message             from './Message';

import '../style/MessageList.css';


const MessageList = (props) => {
    const [message, setMess]    = useState(''); 

    const handleClick = () => {
        const sender  = props.profileStore.name;
        const content = message.trim();

        if (content.length > 0 && sender.length > 0 ) 
        {
            props.sendMsg(content, sender); 
        }

        setMess('');
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
                    <Message txt={value.text} author={value.author !== 'bot'?'Me':'bot'} id={value.id} chatId={props.chatId} key={`message_${id}`} />
                )}  
            </ul>

            <form onSubmit={(event) => event.preventDefault()}>
                <TextField id="outlined-basic" name='message' label="Message" variant="outlined" 
                        value={message} onChange={updateMessage} autoFocus onKeyUp={handleKeyUp}/>              
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


const mapStateToProps = ({ profileReducer }) => ({
    profileStore: profileReducer.profile[1],
});


export default connect(mapStateToProps, null)(MessageList);