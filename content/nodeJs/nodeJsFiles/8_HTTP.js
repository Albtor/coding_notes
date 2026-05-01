//HTTP SERVER MODULE
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hell world from Nodejs');
        res.end(); //to send the response
    }else {
        res.write('using some other domain');
        res.end(); //to send the response
    }
    
});

server.listen('3000');