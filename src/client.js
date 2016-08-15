import React from 'react';
import createStore from './base/create-store';
import getRoute from './route';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

export default class Application extends React.Component {
  render() {
    const store = createStore();
    const route = getRoute();
    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <Router history={history}>
          {route}
        </Router>
      </Provider>
    );
  }
}
