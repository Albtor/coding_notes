// EJS TEMPLATES WITH EXPRESS

//localhost:3000/books 
//you can use this to create dinamic websites, 
//Does not work

const express = require('express');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname, 'static'))); //using middleware
app.set('view engine','ejs');

app.get('/:userQuery',(req,res)=>{
    res.render('index',{data : {userQuery : req.params.userQuery,
                                searchResults: ['book1', 'book2','book3'],
                                loggedIn : true,
                                username : 'Pablo'
                        }});
});

app.listen(3000);