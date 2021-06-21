const express = require("express");
const app = express();
const PORT = 3001;
const cors = require('cors');

const db = require("./models");

const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

//app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
// }));

app.use(cookieParser());

// app.use(session({
//     key: "userEmail",
//     secret: "thisIsReallyImportantSoYouMustMakeItHardForNoOneKnowIt",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         expires:60 * 60 * 24,
//         //cookie를 한달간 유지한다.
//     },
// }));

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);
const likesRouter = require("./routes/Likes");
app.use("/likes", likesRouter);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`running on ${PORT}`);
    });
});