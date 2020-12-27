const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const expressEjsLayout = require('express-ejs-layouts');

const app = express();
app.use(session({
  secret: 'wowuqu',
  name: 'sessionId',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);

const PORT = 3000;

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'))

app.listen(PORT, function() {
  console.log(`Listen at port ${PORT}.`);
});
