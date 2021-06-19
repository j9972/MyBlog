const express = require("express");
const app = express();
const PORT = 3001;
const cors = require('cors');

const db = require("./config/db");

const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
// app.use(cors({
//     origin: ["http://localhost:3000"],
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
    saveUninitialized: true,
    cookie: {
        expires:60 * 60 * 24,
        //cookie를 한달간 유지한다.
    },
}));


app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});
