//SERVING STATIC FILES WITH EXPRESS
//html, css, javascript, images, videos etc

//create a folder called static with index.html, subfolders of css and js, and inside main.css, main.js
//it will show that html with the linked css but it will show in browser inspection another folder "public" not static, the one we created

const express = require('express');
const path = require('path');
const app = express();

app.use('/',express.static(path.join(__dirname, 'static'))); //using middleware
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.listen(3000);