import React, { useState } from 'react';


const Message = (props) => {
    const txt_list           = [];    
    const [message, setMess] = useState('');
    const [txt, setTxt]      = useState('');

    const click = () => {txt_list.push(message)};

    return (
        <div>
            <form onSubmit={(event) => event.preventDefault()}>
                <input 
                    type="text" 
                    name="message" 
                    value={message} 
                    onChange={(event) => {
                        setMess(event.target.value);
                    }}               
                />
                <div>
                    <button 
                        type="submit" 
                        onClick={() => {
                            click();
                            setTxt(message);
                        }}
                    >
                    Click me
                    </button>
                </div>                
            </form>

            <p>{txt}</p>
        </div>
    );
};

export default Message;