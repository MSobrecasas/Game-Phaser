const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');
 // GET all
router.get('/obstacles/:levelId', (req, res) => {
    const { levelId } = req.params;
    mysqlConnection.query('SELECT * FROM obstacles WHERE level_id=?', [levelId],(err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


module.exports = router;
