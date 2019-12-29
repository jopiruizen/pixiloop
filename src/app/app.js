import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import {theme} from '../styles/theme';
import store from '../store';

const App = () => (
  <Provider store={store}>
  <MuiThemeProvider theme={theme}>
    <AppRouter />
  </MuiThemeProvider>
  </Provider>
);

export default App;