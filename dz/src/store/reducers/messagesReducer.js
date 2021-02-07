import { SEND_MESSAGE, DELETE_MESSAGE, DELETE_MESSAGES } from '../actions/messagesActions';


const initState = {
    messages: []
};

export default function messagesReducer(store=initState, action) {
    switch (action.type) {
        case SEND_MESSAGE: 
            console.log(action);

            const msg = { message: action.content, author: action.sender, id: action.id, chatId: action.chatId };   
            
            return {...store, messages: [...store.messages, msg]};

        case DELETE_MESSAGE: 
            console.log(action);

            const index = store.messages.map(item => item.id).indexOf(action.id);

            return { ...store,  messages: [...store.messages.slice(0, index), ...store.messages.slice(index + 1)]};

        case DELETE_MESSAGES: 
            console.log(action);
            
            return store.messages.filter((item) => item.chatId !== action.chatId);

        default:
            return store;
    }
}