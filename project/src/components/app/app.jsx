import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../pages/main';
import Login from '../pages/login';
import Favorites from '../pages/favorites';
import Room from '../pages/room';
import NotFound from '../pages/404/404';
import {AppRoute} from '../../const';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main cards={props.cards} />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <Login />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <Favorites />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default App;
