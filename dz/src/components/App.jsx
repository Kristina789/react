import React                                from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { BrowserRouter }                    from "react-router-dom";

import ChatList                             from './ChatList';
import Router                               from './Router';


const theme = createMuiTheme();

const App   = (props) => {
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <main>            
                    <Router />                                       
                    <ChatList />
                </main>
            </MuiThemeProvider>
        </BrowserRouter>
    )
}

export default App;