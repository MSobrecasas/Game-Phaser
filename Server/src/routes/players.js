const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');
 // GET by id
router.get('/players/:levelId', (req, res) => {
    const { levelId } = req.params;
    mysqlConnection.query('SELECT * FROM players WHERE levelId=?', [levelId],(err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// get alll
router.get('/players/', (req, res) => {
    mysqlConnection.query('SELECT * FROM players', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
