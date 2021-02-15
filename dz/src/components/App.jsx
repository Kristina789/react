import React                                from 'react';
import { Provider }                         from 'react-redux';
import { ConnectedRouter }                  from 'connected-react-router';
import { PersistGate }                      from 'redux-persist/integration/react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid                                 from '@material-ui/core/Grid';

import ChatList                             from './ChatList';
import Router                               from './Router';
import initStore, { history }               from '../store';


const theme                = createMuiTheme();
const { store, persistor } = initStore();

const App = (props) => {
    return (
        <Provider store={ store }>
            <PersistGate loading={ null } persistor={ persistor } >
                <ConnectedRouter history={ history }>
                    <MuiThemeProvider theme={ theme }>
                        <Grid container spacing={1}>        
                            <Grid item xs={3}>                         
                                <ChatList />
                            </Grid>  
                            <Grid item xs={9}>
                                <Router />
                            </Grid>    
                        </Grid>
                    </MuiThemeProvider>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    )
}

export default App;