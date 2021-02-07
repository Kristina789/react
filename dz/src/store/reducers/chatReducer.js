import update                                 from 'react-addons-update';

import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from "../actions/chatActions";


const initialStore = {
    chats: {
        1: {title: 'Chat 1', messages: []},  
        2: {title: 'Chat 2', messages: []}, 
        3: {title: 'Chat 3', messages: []},
    }
}

/*const dict_filter = function(dict, filter)
{
    let result = {};

    for (let key in dict)
    {
        if (filter(key, dict[key]))
        {
            result[key] = dict[key];
        }
    }

    return result;
}*/

export default function chatReducer(store=initialStore, action) {
    switch (action.type) {
        case ADD_MESSAGE:           
            return update(store, {
                chats: { $merge: {
                    [action.chatId]: {
                        title: store.chats[action.chatId].title,
                        messages: [...store.chats[action.chatId].messages, action.id]
                    }
                }},
            });          
        
        case ADD_CHAT: 
            const chatId = Object.keys(store.chats).length + 1;

            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        title: `Chat ${chatId}`, messages: []
                    }
                }},
            });        

        case DELETE_CHAT:
            /*   
            console.log(dict_filter(store.chats, (key, val) => key !== action.chatId));
            console.log(action.chatId);

            return update(store, { chats: { $set: dict_filter(store.chats, (key, val) => key !== action.chatId) } });*/
            
            return Object.assign({}, store, {
                chats: Object.keys(store.chats).reduce((result, key) => {
                    if (key != action.chatId) {
                        result[key] = store.chats[key];
                    }
                    return result;
                }, {})
            })

        default: 
            return store;
    }
}