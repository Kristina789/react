import { type } from "os";

export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (content, sender, chatId, id) => ({
    type: SEND_MESSAGE,
    content,
    sender,
    chatId,
    id,
});