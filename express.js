const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`listening at http://127.0.0.1:${port}`);
});

// Routes
app.use('/newProfile/', require('./routes/newProfile'));
app.use('/register/', require('./routes/register'));
app.use(express.static(path.join(__dirname, 'public')));