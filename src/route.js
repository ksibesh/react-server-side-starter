import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {Route1, Route2, Layout} from './components';

export default () => {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={Route1}/>
      <Route path="123" component={Route2}/>
    </Route>
  );
}
