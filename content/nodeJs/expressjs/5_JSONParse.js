//WORKING WITH JSON DATA IN EXPRESS AND BODY PARSER MODULE
//Using indexJson.html
//Some Json methods , using jquery in the html file to have an ajax response to the form

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

app.use('/public',express.static(path.join(__dirname, 'static'))); //using middleware
app.use(bodyParser.urlencoded({extended:false})); //Allows us to parse URL data forms
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','indexJson.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //When you post something to the server you do some database work here
    res.json({success : true});
});

app.listen(3000);