import express from 'express';
import path from 'path';
import page from './page.generated';
import stats from './stats.generated.json';

var app = express();
app.use(express.static(path.join(__dirname, "..", "..", "public")));

var createHistory = require('react-router/lib/createMemoryHistory');
var createStore = require('redux').createStore;
var syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;
app.use(function(req, res) {
  var memoryHistory = createHistory(req.orignalUrl);
  console.log(memoryHistory);
  // TODO: create reducers and pass that reducer as argument to function
  var store = createStore(function() {});
  // TODO: find a way to sync history with store
  // var history = syncHistoryWithStore(memoryHistory, store);

  res.end(page(req, stats.assetsByChunkName.main));
});

// app.get("/", function(req, res){
//   res.end(page(req, stats.assetsByChunkName.main))
// });

var server = app.listen(process.env.PORT, function() {
  console.log('listening on port %d', server.address().port);
})
