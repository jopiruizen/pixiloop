import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Routes from './routes';
import Game from '../components/Game';

const AppRouter = (props) => (
  <BrowserRouter>
    <Switch>
        <Route path={Routes.GAME} component={Game} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;