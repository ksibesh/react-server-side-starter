import React from 'react';
import ReactDOM from 'react-dom/server';

module.exports = function(req, scriptFileName) {
  console.log('response sent from server');

  return ReactDOM.renderToString(
    <html>
      <head></head>
      <body>
        <div>
          Server side page
        </div>
        <script src={scriptFileName[0]}></script>
      </body>
    </html>
  );
}
