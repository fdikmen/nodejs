<<<<<<< HEAD
const fs = require('fs')
const http = require('http')

const myServer = http.createServer();

myServer.on('request',(req,res)=>{
    /*fs.readFile('BigVideo.mp4',(err,data)=>{
        if (err) {throw err;}
        res.end(data);
    })*/
    const myReadStream = fs.createReadStream('BigVideo.mp4')
    myReadStream.pipe(res)
});
=======
const fs = require('fs')
const http = require('http')

const myServer = http.createServer();

myServer.on('request',(req,res)=>{
    /*fs.readFile('BigVideo.mp4',(err,data)=>{
        if (err) {throw err;}
        res.end(data);
    })*/
    const myReadStream = fs.createReadStream('BigVideo.mp4')
    myReadStream.pipe(res)
});
>>>>>>> 83c4380886b16c2ca168d09c7313658e1813b636
myServer.listen(3000);