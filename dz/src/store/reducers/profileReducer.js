import {WATCH_PROFILE} from '../actions/profileActions';


const initState = {
    profile: {
        1: {name: 'Dave', age: 100},
    }
};

export default function messagesReducer(store=initState, action) {
    switch (action.type) {
        case WATCH_PROFILE: 
            console.log(action);

            return store.profile[1];
        
            default:
                return store;
    }
}