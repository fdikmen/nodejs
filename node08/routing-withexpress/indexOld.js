<<<<<<< HEAD
const express = require('express')
const app = express()
const port = 3000

//GET POST PUT DELETE ----------> ALL
app.get('/', (req, res) => res.send('Hello World!'))
// OPTIONAL => ?
//app.get('/Cont?act', (req, res) => res.send('Contact World!'))
//app.get('/Co(nta)?ct', (req, res) => res.send('Contact World!'))
//app.get('/Con?t?a?ct', (req, res) => res.send('Contact World!'))
// ANY TEXT => *
//app.get('/Con*tact', (req, res) => res.send('Contact World!'))
// PLUS  => +
//app.get('/Conta+ct', (req, res) => res.send('Contact World!'))
// ? * +
app.get('/C?on+ta*ct', (req, res) => res.send('Contact World!'))


app.get('/About',(request,response)=>response.send("Hello world From GET Method..."))
.post('/About',(request,response)=>response.send("Hello world From POST Method..."))
.delete('/About',(request,response)=>response.send("Hello world From DELETE Method..."))
.put('/About',(request,response)=>response.send("Hello world From PUT Method..."))
.all('/About',(request,response)=>response.send("Hello world From ALL(*) Method..."))

/*// app.get('/User/:id',(req,res)=>{res.send(req.params)})
// app.get('/User/:id/:jobId',(req,res)=>{res.send(req.params)})
app.get('/User/:id?/:jobId',(req,res)=>{res.send("Id="+req.params.id+" JobId="+req.params.jobId)})
app.post('/User',(req,res)=>{res.send("Hello world from USER POST Method...")})*/



=======
const express = require('express')
const app = express()
const port = 3000

//GET POST PUT DELETE ----------> ALL
app.get('/', (req, res) => res.send('Hello World!'))
// OPTIONAL => ?
//app.get('/Cont?act', (req, res) => res.send('Contact World!'))
//app.get('/Co(nta)?ct', (req, res) => res.send('Contact World!'))
//app.get('/Con?t?a?ct', (req, res) => res.send('Contact World!'))
// ANY TEXT => *
//app.get('/Con*tact', (req, res) => res.send('Contact World!'))
// PLUS  => +
//app.get('/Conta+ct', (req, res) => res.send('Contact World!'))
// ? * +
app.get('/C?on+ta*ct', (req, res) => res.send('Contact World!'))


app.get('/About',(request,response)=>response.send("Hello world From GET Method..."))
.post('/About',(request,response)=>response.send("Hello world From POST Method..."))
.delete('/About',(request,response)=>response.send("Hello world From DELETE Method..."))
.put('/About',(request,response)=>response.send("Hello world From PUT Method..."))
.all('/About',(request,response)=>response.send("Hello world From ALL(*) Method..."))

/*// app.get('/User/:id',(req,res)=>{res.send(req.params)})
// app.get('/User/:id/:jobId',(req,res)=>{res.send(req.params)})
app.get('/User/:id?/:jobId',(req,res)=>{res.send("Id="+req.params.id+" JobId="+req.params.jobId)})
app.post('/User',(req,res)=>{res.send("Hello world from USER POST Method...")})*/



>>>>>>> 83c4380886b16c2ca168d09c7313658e1813b636
app.listen(port, () => console.log(`Example app listening on port port!`))