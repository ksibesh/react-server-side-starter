import express from 'express';
import path from 'path';
// import page from './page.generated';
import stats from './stats.generated.json';
import favicon from 'serve-favicon';

import React from 'react';
import ReactDOM from 'react-dom/server';
import createHistory from 'react-router/lib/createMemoryHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { match, RouterContext, Router } from 'react-router';
import {Provider} from 'react-redux';
import getRoute from '../route';
import createStore from '../base/create-store';

var app = express();
app.use(favicon(path.join(__dirname, '../..', 'public', 'assets', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "..", "..", "public")));

// server side rendering logic
app.use(function(req, res) {
  var memoryHistory = createHistory(req.orignalUrl);
  var store = createStore();
  var history = syncHistoryWithStore(memoryHistory, store);

  match({history, routes:getRoute(), location:req.url}, (error, redirectionLocation, renderProps) => {
    // TODO: handle faliure logic and redirection path
    console.log(req.url + " link served via server");
    res.end(ReactDOM.renderToString(
      <html>
        <head></head>
        <body>
          <Provider store={store}>
              <RouterContext {...renderProps}/>
          </Provider>
          <script src={stats.assetsByChunkName.main[0]}></script>
        </body>
      </html>
    ))
  });
});

var server = app.listen(process.env.PORT, function() {
  console.log('listening on port %d', server.address().port);
})
