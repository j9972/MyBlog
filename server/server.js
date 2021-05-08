const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use(express.json());

app.post('/api/login', (req,res) => {

    const userId = req.body.userId;
    const userPassword = req.body.userPassword;
    
    db.query("INSERT INTO loginDB (user_id, user_password) VALUES (?,?)",
    [userId, userPassword],
    (err,result) => {
        if(err) {
            console.log(err, '0_err');
        } else {
            console.log(result, '0_success');
        }
    } );
})


app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});
