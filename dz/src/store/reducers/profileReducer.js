import update from 'react-addons-update';

import {
    START_PROFILE_LOADING,
    SUCCESS_PROFILE_LOADING,
    ERROR_PROFILE_LOADING,
} from '../actions/profileActions';  


const initState = {
    profile:  {},
    isLoading: true,
};

export default function messagesReducer(store=initState, action) {
    switch (action.type) {
        /*case ADD_PROFILE: 
        {    
            console.log(action);

            const profile = {};

            const { name, age } = action.data;
            profile[1]          = { name, age };            

            return update(store, {
                profile: { $set: profile},
                isLoading: { $set: false },
            });
        } --- для загрузки через fetch
        */

        case START_PROFILE_LOADING: 
        {
            return update(store, {                
                isLoading: { $set: true },
            });
        }

        case SUCCESS_PROFILE_LOADING: 
        {
            const profile = {};

            action.payload.forEach(data => {
                const { name, age } = data;
                profile[1]          = { name, age };
            });

            return update(store, {
                profile: { $set: profile},
                isLoading: { $set: false },
            });
        }

        case ERROR_PROFILE_LOADING: 
        {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        
        default:
            return store;
    }
}