const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jh485200@@",
    database: ""
})

module.exports = db;