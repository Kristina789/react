export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = () => ({
    type: ADD_CHAT,
});


export const DELETE_CHAT = '@@chat/DELETE_CHAT';

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    chatId,
});


export const ADD_MESSAGE = '@@message/ADD_MESSAGE';

export const addMessage = (id, chatId) => ({
    type: ADD_MESSAGE,
    id,
    chatId,
});