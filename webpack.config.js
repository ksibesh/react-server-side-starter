var path = require("path");
var webpack = require("webpack");

var assetPath = path.join(__dirname, "public");
var loaders = [{
  test: /.js?$/,
  loader: 'babel-loader',
  exclude: /node_modules/
}];

module.exports = [{
  name: "client",
  entry: "./src/client.js",
  devtool: "source-map",
  output: {
    path: assetPath,
    filename: "bundle.js",
  },
  module: {
    loaders: loaders,
  },
  plugins: [
    function(compiler) {
      this.plugin("done", function(stats) {
        require('fs').writeFileSync(path.join(__dirname, "src", "server", "stats.generated.json"), JSON.stringify(stats.toJson()));
      });
    }
  ]
}];
