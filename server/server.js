const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const db = require("./config/db");

const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
// app.use(cors({
//     origin: ["http://localhost:3001"],
//     methods: ["GET", "POST"],
//     credentials: true,
// }));
app.use(cors());

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    key: "userEmail",
    secret: "thisIsReallyImportantSoYouMustMakeItHardForNoOneKnowIt",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires:60 * 60 * 24,
    },
}))

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post('/api/login', (req,res) => {

    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    
    db.query("INSERT INTO loginDB (user_email, user_password) VALUES (?,?)",
    [userEmail, userPassword],
    (err,result) => {
        if(err) {
            console.log(err, '0_err');
        } else {
            console.log(result, '0_success');
        }
    } );
})

app.post('/api/register', (req,res) => {

    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    const userFullname = req.body.userFullName;
    const userconfirmPassword = req.body.userconfirmPassword;
    
    db.query("INSERT INTO registerDB (user_fullname, user_email, user_password, user_confirmPassword) VALUES (?,?,?,?)",
    [userFullname, userEmail, userPassword, userconfirmPassword],
    (err,result) => {
        if(err) {
            console.log(err, '1_err');
        } else {
            console.log(result, '1_success');
        }
    } );
})


app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});
