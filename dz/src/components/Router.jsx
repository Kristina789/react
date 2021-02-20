import React             from 'react';

import { Switch, Route } from "react-router-dom";

import Messages          from './pages/Messages';
import Profile           from './Profile';


const Router = (props) => {   
    return (
        <Switch>
            <Route exact path='/chat/:chatId/' render={ (obj) =>
                <Messages chatId={ +obj.match.params.chatId } chats={props.chats} />                 
            } />
            <Route exact path='/profile/' render={ (obj) => <Profile /> } />    
        </Switch>
    )
}

export default Router;