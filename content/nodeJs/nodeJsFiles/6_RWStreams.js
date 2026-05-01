const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt');
readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk); //writes in a new file
});

//When to use streams instead of read file
//read file uses a buffer and will not work
//with streams there is no limit