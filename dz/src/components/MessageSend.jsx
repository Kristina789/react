import React     from 'react';

import TextField from '@material-ui/core/TextField';
import Button    from '@material-ui/core/Button';

import '../style/MessageList.css';


const MessageList = (props) => {

    /*const del = () => {
        setMess(''); 
        setAuthor('');
    }

    return (
        <div className='layout'>
            <form onSubmit={(event) => event.preventDefault()}>
                <TextField id="outlined-basic" name='message' label="Message" variant="outlined"  onChange={props.newMessage} autoFocus />              
                <p/>
                <TextField id="outlined-basic" name='author' label="Author" variant="outlined"  onChange={props.newAuthor} />
                <p/>
                <div>
                    <Button variant="contained" color="primary" type="submit" onClick={props.clickBtn, del}>
                        Click me
                    </Button>
                </div>                
            </form>  
        </div>
    );*/
};

export default MessageList;