<<<<<<< HEAD
import React, { useState } from 'react';

import TextField                              from '@material-ui/core/TextField';
import Button                                 from '@material-ui/core/Button';

import Message                                from './Message';

import '../style/MessageList.css';


const MessageList = (props) => {
    const [msgList, setMsgList] = useState([]);
    const [author, setAuthor]   = useState(''); 
    const [message, setMess]    = useState(''); 

    const handleClick = (event) => {
        let name_author = author.trim();
        let content     = message.trim();

        if (content.length > 0 && name_author.length > 0 ) {
            setMsgList(list => [...list, { message: content, author: name_author }]);
            sendMsgBot(name_author);

            setTimeout(() => {
                setMess('');
                setAuthor('');
            }, 100);
        }
=======
import React, { useState, useEffect  } from 'react';

import Message                         from './Message';


const MessageList = (props) => {
    const [list, setList]     = useState([]); 
    const [author, setAuthor] = useState('');  
    const [answer, setAnswer] = useState('');
    const [message, setMess]  = useState('');   

    const handleClick = () => {
        let name_author = author.trim();
        let content     = message.trim();

        if (content.length > 0 && name_author.length > 0 ) setList(list => [...list, { message, author }]);
>>>>>>> main
    };

    const updateAuthor = (event) => {
        setAuthor(event.target.value);
    };

    const updateMessage = (event) => {
        setMess(event.target.value);
<<<<<<< HEAD
    };

    const sendMsgBot = (name) => {
        let _author = name + '';   

        setTimeout(() => {
            setMsgList(list => [...list, {message: `Hello, ${_author}! I'm bot.`, author: 'bot'}])
        }, 10000);        
    };

    /*useEffect(() => {
        if (message) {  
            let _author = author + '';         

            if (_author.length > 0) {
                setTimeout(() => setMsgList(list => [...list, {message: `Hello, ${_author}! I'm bot.`, author: 'bot'}]), 4000);
            }
        } -- разные варианты 

        let _author = author + '';         

        if (_author.length > 0) {
            setTimeout(() => setMsgList(list => [...list, {message: `Hello, ${_author}! I'm bot.`, author: 'bot'}]), 4000);
        }
        setMess('');
        setAuthor('');
    }, [msgList]); */

    return (
        <div className='layout'>        
            <ul className='message-field'>
                {msgList.map((value, id) => 
                    <Message txt={value.message} author={value.author} key={`message_${id}`}/>
                )}  
            </ul>

            <form onSubmit={(event) => event.preventDefault()}>
                <TextField id="outlined-basic" name='message' label="Message" variant="outlined" value={message} onChange={updateMessage} autoFocus />              
                <p/>
                <TextField id="outlined-basic" name='author' label="Author" variant="outlined" value={author} onChange={updateAuthor} />
                <p/>
                <div>
                    <Button variant="contained" color="primary" type="submit" onClick={handleClick}>
                        Click me
                    </Button>
                </div>                
            </form>  
        </div>
=======
    }

    useEffect(() => {
        if (message) setAnswer(`Hello, ${author}! I'm robot.`);
        
        setMess('');
        setAuthor('');
    }, [list]);

    return (
        <>
            <form onSubmit={(event) => event.preventDefault()}>
                <label>
                    Message:
                    <input 
                        type="text" 
                        name="message" 
                        value={message} 
                        onChange={updateMessage}               
                    />
                </label>                
                <p/>
                <label> 
                    Name of author:                    
                    <input 
                        type="text" 
                        name="author" 
                        value={author} 
                        onChange={updateAuthor}               
                    />
                </label>
                <p/>
                <div>
                    <button 
                        type="submit" 
                        onClick={handleClick}
                    >
                    Click me
                    </button>
                </div>                
            </form>  
            <ul>
                {list.map((value, id) => 
                    <Message txt={value.message} author={value.author} key={`message_${id}`}/>
                )}
            </ul>
            <p>{answer}</p>
        </>
>>>>>>> main
    );
};

export default MessageList;