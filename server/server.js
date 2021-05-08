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

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});
