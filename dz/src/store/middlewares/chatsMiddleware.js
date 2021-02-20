import { DELETE_CHAT } from '../actions/chatActions';
import { deleteMessage } from '../actions/messagesActions';



export default store => next => (action) => {
    const chats = store.getState().chatReducer.chats;

    switch (action.type) {
        case DELETE_CHAT:
        {   
            for (let id of chats[action.chatId].messages) {                
                store.dispatch(deleteMessage(id, action.chatId));
            }

            break;
        }
    }

    return next(action);
}