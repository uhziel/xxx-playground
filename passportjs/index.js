const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
app.use(session({
  secret: 'wowuqu'
}));
app.use(flash());

const PORT = 3000;

app.get('/', function(req, res) {
  req.flash('word', 'hi, flash!');
  res.redirect('/flash');
  
});

app.get('/flash', function(req, res) {
  const word = req.flash('word');
  res.send(`helloworld ${word}`);
});

app.listen(PORT, function() {
  console.log(`Listen at port ${PORT}.`);
});
