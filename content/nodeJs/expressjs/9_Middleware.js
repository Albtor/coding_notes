//MIDDLEWARE
//What is and how we can create them. 
//Code executed between the user and server

//localhost:3000
//localhost:3000

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json()); //Middleware function, checks if there is JSON sent, parses

//OWN MIDDLEWARE FUNCTION
app.use((req,res,next)=>{
    req.banana = "banana"; //assign a param 
    console.log(req.url,req.method);
    next();
});

app.get('/',(req,res)=>{
    console.log(req.banana); //gets printed in console
    res.send('Middleware');
});

app.listen(3000);