import update           from 'react-addons-update';

import { ADD_MESSAGE }  from '../actions/messageActions';
import { ADD_CHAT }     from "../actions/chatActions";


const initialStore = {
    chats: {
        1: {title: 'Chat 1', messages: []},  
        2: {title: 'Chat 2', messages: []}, 
        3: {title: 'Chat 3', messages: []},
    }
}

export default function chatReducer(store=initialStore, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            console.log(action);
            
            return update(store, {
                chats: { $merge: {
                    [action.chatId]: {
                        title: store.chats[action.chatId].title,
                        messages: [...store.chats[action.chatId].messages, action.id]
                    }
                }},
            });
        }       
        
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;

            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        title: `Chat ${chatId}`, messages: []
                    }
                }},
            });
        }

        default: 
            return store;
    }
}