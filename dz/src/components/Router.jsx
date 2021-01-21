import React             from 'react';

import { Switch, Route } from "react-router-dom";

import Messages          from './pages/Messages';
import Profile           from './pages/Profile';


const Router   = (props) => {   
    return (
        <Switch>
            <Route exact path='/chat/:chatId/' render={ (obj) =>
                <Messages chatId={ Number(obj.match.params.chatId) } /> 
            } />
            <Route exact path='/profile/' render={ (obj) => <Profile /> } />    
        </Switch>
    )
}

export default Router;