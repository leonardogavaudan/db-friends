const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    const form = '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);
});

// Since we are using the passport.authenticate() method, we should be redirected no matter what 
app.post('/', passport.authenticate('local', { failureRedirect: 'login-failure', successRedirect: 'login-success' }), (err, req, res, next) => {
    if (err) next(err);
});

module.exports = router;