import React                  from 'react';
import { bindActionCreators } from "redux";
import {connect}              from 'react-redux';

import { deleteMessage }      from '../store/actions/messagesActions';

import '../style/Message.css';


const Message = ({txt, author, id, deleteMessage}) => {
    return (
        <li className='message'
            style={ { alignSelf: author === 'bot' ?
                    'flex-start' : 'flex-end' } }
        >
            <div>{txt}</div>
            <div className='message-author'>{author}</div>
            <div className='message-author'>{id}</div>
            <button onClick={() => deleteMessage(id)}>delete</button>
        </li>
    )
};


const mapDispatchToProps = (dispatch) => bindActionCreators({ deleteMessage }, 
    dispatch);

export default connect(null, mapDispatchToProps)(Message);