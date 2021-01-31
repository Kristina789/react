import React, { useState }                  from 'react';
import { Provider }                         from 'react-redux';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid                                 from '@material-ui/core/Grid';

import { BrowserRouter }                    from "react-router-dom";

import ChatList                             from './ChatList';
import Router                               from './Router';
import initStore                            from '../store';


const theme = createMuiTheme();

const App = (props) => {
    return (
        <Provider store={initStore()}>
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <Grid container spacing={1}>        
                        <Grid item xs={3}>                         
                            <ChatList />
                        </Grid>  
                        <Grid item xs={9}>
                            <Router />
                        </Grid>    
                    </Grid>
                </MuiThemeProvider>
            </BrowserRouter>
        </Provider>
    )
}

export default App;