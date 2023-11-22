const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'aconpardo_condominio',
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0,
});

//local

//const pool = mysql.createPool({
//    host: 'localhost',
 //   user: 'root',
//    password: 'root',
//    database: 'aconpardo_condominio',
//    waitForConnections: true,
//    connectionLimit: 100,
//    queueLimit: 0,
//});

module.exports = pool.promise();
