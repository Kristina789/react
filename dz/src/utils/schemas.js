import { schema } from 'normalizr';


export const _messages = new schema.Entity('messages');
export const chats     = new schema.Entity('chats', {
    messages: [_messages],
});