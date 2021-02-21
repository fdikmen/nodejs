<<<<<<< HEAD
const fs = require('fs');
const file = 'Video.mp4';
let progress = 0;
const myReadStream = fs.createReadStream(file);

fs.stat(file,(err,data)=>{
    const total = data.size ;

    myReadStream.on('data',(chunk)=>{
        progress += chunk.length; //progress = progress + chunk.length;  
        console.log(Math.round((progress*100)/total) + "%");      
    })
    myReadStream.on('end',()=>{
        console.log("Data read finished...");
    })
=======
const fs = require('fs');
const file = 'Video.mp4';
let progress = 0;
const myReadStream = fs.createReadStream(file);

fs.stat(file,(err,data)=>{
    const total = data.size ;

    myReadStream.on('data',(chunk)=>{
        progress += chunk.length; //progress = progress + chunk.length;  
        console.log(Math.round((progress*100)/total) + "%");      
    })
    myReadStream.on('end',()=>{
        console.log("Data read finished...");
    })
>>>>>>> 83c4380886b16c2ca168d09c7313658e1813b636
})