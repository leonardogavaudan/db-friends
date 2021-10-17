const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const {db} = require('../config/database.js');

router.post('/', (req, res) => {
    console.log("got hereeee");
    // res.send(req.body)

    const sql = `SELECT * FROM users;`;

    db.query(sql, (error, results) => {
        res.send(results);
    })
})

module.exports = router;