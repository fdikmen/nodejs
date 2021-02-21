const http = require('http')

//HTTP METHODS: GET-POST-PUT-DELETE
const myServer = http.createServer((req,res)=>{
if (req.method === 'GET') {
    if(req.url === '/') {res.write("Here Home Page ...");}
    else if(req.url === '/Contact') {res.write("Here Contact Page ...");}
    else {res.write("404 Not Found Page ...");}    
}

    res.end();
});

myServer.listen("3000")