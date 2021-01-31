import {SEND_MESSAGE} from '../actions/messagesActions';


const initState = {
    messages: []
};

export default function messagesReducer(store=initState, action) {
    switch (action.type) {
        case SEND_MESSAGE: 
            console.log(action);

            const msg = { message: action.content, author: action.sender, id: action.id, chatId: action.chatId };   
            
            return {...store, messages: [...store.messages, msg]};
        
            default:
                return store;
    }
}