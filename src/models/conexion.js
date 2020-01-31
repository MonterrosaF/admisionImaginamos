const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FelipeDev4242!',
    database: 'pruebaapi'
})

module.exports = connection;