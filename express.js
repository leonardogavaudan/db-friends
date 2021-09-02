const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/newProfile.html', require('./routes/newProfile'))

// Serve content
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`listening at http://127.0.0.1:${port}`)
})