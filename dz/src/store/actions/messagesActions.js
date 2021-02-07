export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (content, sender, chatId, id) => ({
    type: SEND_MESSAGE,
    content,
    sender,
    chatId,
    id,
});


export const DELETE_MESSAGE = '@@message/DELETE_MESSAGE';

export const deleteMessage = (id) => ({
    type: DELETE_MESSAGE,
    id,
});


export const DELETE_MESSAGES = '@@message/DELETE_MESSAGES';

export const deleteMessages = (chatId) => ({
    type: DELETE_MESSAGES,
    chatId,
});