const express = require('express');
const router = express.Router();
const Contact = require('../models/contact')

router.post('/', (req, res) => {
    let { firstName, lastName } = req.body
    let newContact = new Contact({ firstName: firstName, lastName: lastName })
    newContact.save()
    console.log(`just saved ${firstName} ${lastName}`)
    res.sendStatus(200)
});

module.exports = router;