import { SEND_MESSAGE, sendMessage } from '../actions/messagesActions';

import '../../style/ChatList.css';

const addId = () => Date.now() + Math.floor(Math.random() * 99);

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
        {   
            const message_bot  = document.getElementById(action.chatId);

            if (action.sender === 'bot') {
                message_bot.classList.add('message_bot');

                setTimeout(() => {
                    message_bot.classList.remove('message_bot');
                }, 1000);  
            }

            if (action.sender !== 'bot') {
                const msg = { message: `Hello, ${action.sender + ''}! I'm bot.`, sender: 'bot', id: addId(), chatId: action.chatId };

                setTimeout(() => {
                    store.dispatch(sendMessage(msg.message, 'bot', msg.chatId, msg.id));
                }, 2000);  
            } 
        }
    }

    return next(action);
}