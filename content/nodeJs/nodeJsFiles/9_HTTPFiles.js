//HTTP AND FILES
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{ //request response
    const readStream = fs.createReadStream('./static/example.txt'); //txt, json, png, cualquier archivo, pero habría que cambiar el content-type a image/png
    res.writeHead(200, {'Content-type': 'text/html'}); //Header for response
    readStream.pipe(res); 
}).listen(3000);