var express = require('express');
var path = require('path');
var page = require('./page.generated');
var stats = require('./stats.generated.json');

var app = express();
app.use(express.static(path.join(__dirname, "..", "..", "public")));
app.get("/", function(req, res){
  res.end(page(req, stats.assetsByChunkName.main))
});

var server = app.listen(process.env.PORT, function() {
  console.log('listening on port %d', server.address().port);
})
