const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const genPassword = require('../lib/passwordUtils').genPassword;

router.post('/', (req, res) => {
    const saltHash = genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    console.log(hash)

    const newUser = new User({
        username: req.body.username,
        hash: hash,
        salt: salt,
        email: req.body.email,
        fistName: req.body.firstName,
        lastName: req.body.lastName
    });

    newUser.save()
        .then((user) => {
            console.log(user);
        });

    res.redirect('/login');
});

module.exports = router;