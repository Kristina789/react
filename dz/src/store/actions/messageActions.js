export const ADD_MESSAGE = '@@message/ADD_MESSAGE';

export const addMessage = (id, chatId) => ({
    type: ADD_MESSAGE,
    id,
    chatId,
});