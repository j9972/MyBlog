const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const db = require("./config/db");

const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const PORT = 3000;

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

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
    saveUninitialized: true,
    cookie: {
        expires:60 * 60 * 24,
        //cookie를 한달간 유지한다.
    },
}));

// app.post('/api/login', (req,res) => {

//     const userEmail = req.body.userEmail;
//     const userPassword = req.body.userPassword;
    
//     db.query("INSERT INTO userDB (user_email, user_password) VALUES (?,?)",
//     [userEmail, userPassword],
//     (err,result) => {
//         if(err) {
//             console.log(err, '0_err');
//         } else {
//             console.log(result, '0_success');
//         }
//     } );
// })

app.post('/api/register', (req,res,next) => {

    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    const userFullname = req.body.userFullName;
    const userconfirmPassword = req.body.userconfirmPassword;
    
    if(userPassword == userconfirmPassword) {
        const sql = 'SELECT * FROM userDB where user_email = ?';

        db.query(sql,[userEmail], 
        (err,result,fields) => {
            if(err) console.log(err);

            if(result.length > 0) {
                req.session.flag = 1;
                res.redirect('/');
            } else {
                const hashPassword = bcrypt.hashSync(userPassword, saltRounds);
                const hashConfirmPassword = bcrypt.hashSync(userconfirmPassword, saltRounds);
                const sql = "INSERT into userDB (user_fullname, user_email, user_password, user_confirmPassword) VALUES (?,?,?,?)";

                db.query(sql, [userFullname, userEmail, hashPassword, hashConfirmPassword],
                (err, result, fields) => {
                    if(err) console.log(err);
                    req.session.flag = 2;
                    res.redirect('/');
                })
            }
        });
    } else {
        req.session.flag = 3;
        res.redirect('/');
    }
});

app.post('/api/login', function(req,res,next){

    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
  
    const sql = 'select * from userDB where email = ?;';
    
    db.query(sql,[email], function(err,result, fields){
        if(err) console.log(err);

        if(result.length && bcrypt.compareSync(userPassword, result[0].userPassword)){
            req.session.userEmail = userEmail;
            res.redirect('/home');
        }else{
            req.session.flag = 4;
            res.redirect('/');
        }
    });
});

//Route For Home Page
app.get('/api/home', function(req, res, next){
    res.render('home', {message : 'Welcome, ' + req.session.userEmail});
});
  
app.get('/api/logout', function(req, res, next){
    if(req.session.userEmail){
        req.session.destroy();
        res.redirect('/');
    }
})


app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});
