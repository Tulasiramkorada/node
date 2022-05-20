const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'nodecomplete',
    password:'Nspira@123'
});

module.exports = pool.promise();