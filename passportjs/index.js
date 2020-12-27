const express = require('express');
const app = express();

const PORT = 3002;

app.get('/', function(req, res) {
  res.send('helloworld');
});

app.listen(PORT, function() {
  console.log(`Listen at port ${PORT}.`);
});
