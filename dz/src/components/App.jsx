import React                                 from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ChatList         from './ChatList';
import Header           from './Header';
import MessageList      from './MessageList';


const theme = createMuiTheme();

const App = (props) => {
    return (
        <MuiThemeProvider theme={theme}>
            <Header />
            <ChatList />
            <MessageList />
        </MuiThemeProvider>
    )
}

export default App;