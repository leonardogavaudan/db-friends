const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    res.sendFile('public/login.html', { root: './' })
});

router.get('/login-success', (req, res, next) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});

router.get('/login-failure', (req, res, next) => {
    res.send('You entered the wrong password.');
});

// Since we are using the passport.authenticate() method, we should be redirected no matter what 
router.post('/', passport.authenticate('local', { failureRedirect: 'login-failure', successRedirect: 'login-success' }), (err, req, res, next) => {
    if (err) next(err);
});

module.exports = router;