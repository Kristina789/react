import { RSAA, getJSON } from 'redux-api-middleware';


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


export const START_MESSAGES_LOADING   = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING   = '@@message/ERROR_MESSAGES_LOADING';

export const loadMessages = () => ({
    [RSAA]: {
        endpoint: '../../../api/messages.json',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json,
                ),
            },
            ERROR_MESSAGES_LOADING,
        ],
    },
});