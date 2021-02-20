import { apiMiddleware } from 'redux-api-middleware';

import messageMiddleware from './messageMiddleware';
import chatsMiddleware from './chatsMiddleware';


export default [
    apiMiddleware,
    chatsMiddleware,
    messageMiddleware,
];
