const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'pruebaapi'
})

module.exports = connection;