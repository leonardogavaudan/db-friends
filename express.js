const express = require('express');
const path = require('path');
const connection = require('./config/database');

const session = require('express-session');
let MySQLStore = require('express-mysql-session')(session);
let passport = require('passport');
let crypto = require('crypto');

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
var sessionStore = new MySQLStore({}, connection);

app.use(session({
    secret: process.env.SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    }
}));

// Passport authentication
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/newProfile/', require('./routes/newProfile'));
app.use('/register/', require('./routes/register'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`listening at http://127.0.0.1:${port}`);
});