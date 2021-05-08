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
app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    key: "userId",
    secret: "thisIsReallyImportantSoYouMustMakeItHardForNoOneKnowIt",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires:60 * 60 * 24,
    },
}))

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
