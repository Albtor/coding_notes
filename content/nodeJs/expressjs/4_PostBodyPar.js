// HTTP POST REQUEST W EXPRESS AND BODY PARSER MODULE
//INDEX FILE WITH A FORM WITH EMAIL AND PASSWORD TO SUBMIT
//WE NEED A MODULE TO PARSE DATA
//INSTALL npm install body-parser

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname, 'static'))); //using middleware
app.use(bodyParser.urlencoded({extended:false})); //Allows us to parse URL data forms
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //When you post something to the server you do some database work here
    res.send('successfully posted data');
});

app.listen(3000);