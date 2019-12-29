import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Routes from './routes';
import Examples from '../components/Examples';

const AppRouter = (props) => (
  <BrowserRouter>
    <Switch>
        <Route path={Routes.EXMAPLES} component={Examples} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;