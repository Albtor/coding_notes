const fs = require('fs');

//CREATE FOLDER
fs.mkdir('tutorial',(err)=>{
    if(err)
        console.log(err);
    else 
        console.log('successfully created folder');
});

//DELETE FOLDER
fs.rmdir('tutorial',(err)=>{
    if(err)
        console.log(err);
    else 
        console.log('successfully deleted folder');
});


//CREATE FILE INSIDE A FOLDER
fs.writeFile('./tutorial/example.txt', 'file created in folder', (err)=>{
    if(err)
        console.log(err);
    else 
        console.log('successfully created file inside folder tutorial');
});

//DELETE FOLDER WITH 1 FILE INSIDE -- rmdir wouldn't work if folder is not empty
fs.unlink('./tutorial/example.txt', (err)=>{
    if(err)
        console.log(err);
    else 
        console.log('successfully removed  file inside folder tutorial');

        fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err);
            else 
                console.log('Deleted folder after deleting file');
        });
});


//DELETE ALL FILES OF A FOLDER 
fs.readdir('tutorial', (err, files)=> {
    if(err)
        console.log(err);
    else {
        console.log(files);
        for(let file of files){
            fs.unlink('./tutorial/' + file, (err)=>{
                if(err)
                console.log(err);
                else 
                console.log('succesfully deleted file '+file);
            });
        }
    }
        
});
