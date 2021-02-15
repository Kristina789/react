import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import chatReducer       from './chatReducer';
import messagesReducer   from './messagesReducer';
import profileReducer    from './profileReducer';


export default (history) => combineReducers({
    router: connectRouter(history),        
    chatReducer,
    messagesReducer,
    profileReducer,
});