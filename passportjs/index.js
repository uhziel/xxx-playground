const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const expressEjsLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
app.use(session({
  secret: 'wowuqu',
  name: 'sessionId',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use((req,res,next)=> {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error  = req.flash('error');
  next();
});

app.use(express.urlencoded({extended: false}));

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('Please config your env MONGODB_URI first.');
  return 1;
}
//mongoose
mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

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
