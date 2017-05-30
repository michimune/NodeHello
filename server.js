var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Node.js!!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port %d !', process.env.PORT);
});
