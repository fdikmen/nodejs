<<<<<<< HEAD
const express = require('express')
const myApp = express()

myApp.get('/',(req,res)=>{
    res.send('Hello world from ExpressJS...');
});

myApp.get('/About',(req,res)=>{
    res.send('Hello world from About Page in ExpressJS...');
});

// myApp.listen(3005)
=======
const express = require('express')
const myApp = express()

myApp.get('/',(req,res)=>{
    res.send('Hello world from ExpressJS...');
});

myApp.get('/About',(req,res)=>{
    res.send('Hello world from About Page in ExpressJS...');
});

// myApp.listen(3005)
>>>>>>> 83c4380886b16c2ca168d09c7313658e1813b636
myApp.listen(3005,()=>{console.log('Express Server Running...')})