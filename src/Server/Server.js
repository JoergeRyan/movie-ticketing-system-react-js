
const express = require('express');
const app = express();
require("dotenv").config();
const dbconfig = require('./dbConfig');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Nodejs server is running port 5000`));

//mongodb+srv://Hanc81818:WM8XGRMcYMzaitRA@cluster0.azy2r3f.mongodb.net/

