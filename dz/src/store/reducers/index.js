import {combineReducers} from 'redux';

import chatReducer       from './chatReducer';
import messagesReducer   from './messagesReducer';
import profileReducer    from './profileReducer';


export default combineReducers({
    chatReducer,
    messagesReducer,
    profileReducer,
});