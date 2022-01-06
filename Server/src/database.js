const mysql = require('mysql');

const mysqlConnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'game_tpfinal',
        multipleStatements: true
    }
);

mysqlConnection.connect(function(err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('db esta conectada');
    }
});

module.exports = mysqlConnection;
