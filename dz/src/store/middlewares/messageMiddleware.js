import { SEND_MESSAGE, sendMessage, deleteMessages } from '../actions/messagesActions';
import { DELETE_CHAT, addMessage }                   from '../actions/chatActions';


let addId = () => Date.now() + Math.floor(Math.random() * 99);

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender != 'bot') {
                const msg = { message: `Hello, ${action.sender + ''}! I'm bot.`, sender: 'bot', id: addId(), chatId: action.chatId };

                setTimeout(() => {
                    store.dispatch(sendMessage(msg.message, 'bot', msg.chatId, msg.id));
                    store.dispatch(addMessage(msg.id, msg.chatId));
                }, 2000);  
            } else {
                document.getElementById(action.chatId).style.color = 'red';

                setTimeout(() => {
                    document.getElementById(action.chatId).style.color = 'black';
                }, 1000);  
            }

        /*case DELETE_CHAT:
            store.dispatch(deleteMessages(action.chatId));*/
    }

    return next(action);
}