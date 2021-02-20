import update from 'react-addons-update';

import {
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING,
} from '../actions/chatActions';  

import {
    SEND_MESSAGE,
    DELETE_MESSAGE,
} from '../actions/messagesActions';  


const initState = {
    messages: {},
    isLoading: false,
};

export default function messagesReducer(store=initState, action) {
    switch (action.type) {
        case SEND_MESSAGE: 
        {   
            return update(store, {
                messages: { $merge: { [action.id]: { id: action.id, text: action.content, author: action.sender, chatId: action.chatId } }
            }});
        }

        case DELETE_MESSAGE: 
        {
            const new_messages = Object.keys(store.messages).reduce((result, key) => {
                if (key != action.id) {
                    result[key] = store.messages[key];
                }
                return result;
            }, {});

            return update(store, {
                messages: { $set: new_messages},
            }); 
        }
        
        case START_CHATS_LOADING: 
        {
            return update(store, {                
                isLoading: { $set: true },
            });
        }

        case SUCCESS_CHATS_LOADING: 
        {
            return update(store, {
                messages: { $set: action.payload.entities.messages },
                isLoading: { $set: false },
            });
        }

        case ERROR_CHATS_LOADING: 
        {
            return update(store, {
                isLoading: { $set: false },
            });
        }
                
        default:
            return store;
    }
}