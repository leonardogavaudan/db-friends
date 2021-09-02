const express = require('express');
const uuid = require('uuid');
const router = express.Router();

router.post('/', (req, res) => {
    console.log("got hereeee")
})

module.exports = router;