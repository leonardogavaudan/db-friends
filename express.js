const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`listening at http://127.0.0.1:${port}`);
});

// Database
const db = mysql.createConnection({
    host:'localhost',
    user: 'testuser',
    password: 'testpassword',
    database: 'dbfriends'
});

db.connect();
module.exports = {db};

// Routes
app.use('/newProfile/', require('./routes/newProfile'));
app.use(express.static(path.join(__dirname, 'public')));