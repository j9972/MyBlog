const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jh485200@@",
    database: "myOwnBlogDB"
});

db.connect((err) => {
    if(err) throw err;
    console.log('db connected...');
})

module.exports = db;