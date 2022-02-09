const express = require('express');
const path = require('path');
const connection = require('./config/database');
const session = require('express-session');
let SequelizeStore = require('connect-session-sequelize')(session.Store);
let passport = require('passport');

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// General app
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
let sessionStore = new SequelizeStore({
  db: connection,
});

app.use(
  session({
    secret: process.env.SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    },
  })
);

// Create a 'sessions' table if it doesn't exist yet
sessionStore.sync();

// Passport authentication
require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/newProfile/', require('./routes/newProfile'));
app.use('/register/', require('./routes/register'));
app.use('/login/', require('./routes/login'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`listening at http://127.0.0.1:${port}`);
});
