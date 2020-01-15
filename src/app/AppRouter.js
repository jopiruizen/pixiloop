import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Routes from './routes';
import Snake from '../components/Snake';
import Scroller from '../components/Scroller';

const AppRouter = (props) => (
  <BrowserRouter>
    <Switch>
        <Route path={Routes.SCROLLER} component={Scroller} />
        <Route path={Routes.SNAKE} component={Snake} />
        <Route path={Routes.GAME} component={Snake} />
      
    </Switch>
  </BrowserRouter>
);

export default AppRouter;