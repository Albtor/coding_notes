//WORKING WIT THE EXPRESS ROUTER
//Separate the routes into different files

const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname, 'static'))); //using middleware
app.set('view engine','ejs');

const people = require('./routes/people');

app.use('/people',people);

app.listen(3000);