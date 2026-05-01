//PIPE
const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt');
readStream.pipe(writeStream); //we need 2 streams, read and write, this is the basic one


//PIPE CHAINING COMPRESS FILES
const zlib = require('zlib'); //Module for compressing files
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example3.txt', 'utf8');
const writeStream = fs.createWriteStream('example4.txt.gzip');
readStream.pipe(gzip).pipe(writeStream); 


//UNCOMPRESS FILES
const zlib2 = require('zlib'); //Module for compressing files
const Gunzip = zlib2.createGunzip();
const readStream = fs.createReadStream('./example3.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(Gungzip).pipe(writeStream); 