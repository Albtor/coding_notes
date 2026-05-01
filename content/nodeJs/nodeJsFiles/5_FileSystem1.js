const fs = require('fs');

//Create a file , 3 parameters
fs.writeFile('example.txt', "this is an example", (err)=> {
    if(err)
        console.log(err);
    else{
        console.log('File created');
        fs.readFile('example.txt','utf8',(err,file)=>{ //if utf8 not set, it will print the binary
            if(err){
                console.log(err);
            }
            else {
                console.log(file);
            }
                
        });
    };
        
});

//Rename 3 params
fs.rename('example.txt', 'example2.txt', (err)=>{
    if(err)
        console.log(err);
    else 
        console.log('successfully renamed the file');  
});

//Append data to the file 3 params
fs.appendFile('example2.txt', '\nSome data being appended', (err)=>{
    if(err)
        console.log(err);
    else 
        console.log('successfully appended data to the file');
       
});

//Delete file
fs.unlink('example.txt', (err)=>{
    if(err)
        console.log(err);
    else 
        console.log('successfully deleted file');
       
});

