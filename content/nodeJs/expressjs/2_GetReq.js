// HTTP GET AND ROUTE PARAMETERS

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World from Express 2');
});

app.get('/example',(req,res)=>{
    res.send('Hitting example route');
});

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query); //2* and 3*
    res.send(req.params.name + " : " + req.params.age );
});

app.listen(3000);


//IN browser: http://localhost:3000/example/pedro/25

//2-in terminal there will be an object, to have it filled write in browser http://localhost:3000/example/pedro/25?tutorial=paramstutorial
//it will show in terminal: { tutorial: 'paramstutorial' }

//3-in terminal there will be an object, to have it filled write in browser http://localhost:3000/example/pedro/25?tutorial=paramstutorial&sort=byage
//it will show in terminal: { tutorial: 'paramstutorial', sort: 'byage' }

//WHen use route paramenters: When you must have that data, it cannot be blank
//Query string parameters: When we want to have some optional 