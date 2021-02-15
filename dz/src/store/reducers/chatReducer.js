import update               from 'react-addons-update';

import { 
    ADD_CHAT, 
    DELETE_CHAT, 
    SUCCESS_CHATS_LOADING 
}                           from "../actions/chatActions";
import { SEND_MESSAGE }     from '../actions/messagesActions';



const initialStore = {
    chats: {},
    isLoading: true,
}

export default function chatReducer(store=initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE:           
        {
            return update(store, {
                chats: { $merge: {
                    [action.chatId]: {
                        title: store.chats[action.chatId].title,
                        messages: [...store.chats[action.chatId].messages, action.id]
                    }
                }},
            }); 
        }  
            
        case SUCCESS_CHATS_LOADING: 
        {
            return update(store, {
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },
            });
        }              
        
        case ADD_CHAT: 
        {
            const chatId = Object.keys(store.chats).length + 1;

            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        id: chatId, title: `Chat ${chatId}`, messages: []
                    }
                }},
            });        
        }

        case DELETE_CHAT:     
        {
                const new_chats = Object.keys(store.chats).reduce((result, key) => {
                    if (key != action.chatId) {
                        result[key] = store.chats[key];
                    }
                    return result;
                }, {});

            return update(store, {
                chats: { $set: new_chats},
                isLoading: { $set: false },
            }); 
        }

        default: 
            return store;
    }
}