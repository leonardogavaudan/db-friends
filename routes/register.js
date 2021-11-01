const express = require('express');
const router = express.Router();
const User = require('../models/user.js')

router.post('/', (req, res) => {
    let { firstName, lastName, email, password } = req.body
    let newUser = new User({ firstName, lastName, email, password })
    newUser.save()
    console.log(`just created new User ${firstName} ${lastName} in database`)

    res.sendStatus(200)
});

module.exports = router;