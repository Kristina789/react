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
    };

    const updateAuthor = (event) => {
        setAuthor(event.target.value);
    };

    const updateMessage = (event) => {
        setMess(event.target.value);
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
    );
};

export default MessageList;