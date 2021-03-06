<<<<<<< HEAD
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug');


/*app.use('/about',(req,middleRes,next)=>{
    const isAuthorized = false;
    if (isAuthorized) {
        next();
    } else {
        middleRes.send("You have no authority. Please login... From URL:"+req.url)
    }
})*/
/*const isAuth = require('./helpers/isAuth')
//app.use(isAuth)
app.use('/about',isAuth)*/

//GET POST PUT DELETE ----------> ALL
app.get('/', (req, res) => res.send('Hello World!'))

const contact = require('./routers/contact')
app.use('/api/',contact)

const about = require('./routers/about')
app.use('/',about)

const user = require('./routers/user')
app.use('/',user)

app.use((err,req,res,next)=>{
    res.status(err.status);
    res.render('error.pug',{message:err.message,status:err.status})
})


=======
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug');


/*app.use('/about',(req,middleRes,next)=>{
    const isAuthorized = false;
    if (isAuthorized) {
        next();
    } else {
        middleRes.send("You have no authority. Please login... From URL:"+req.url)
    }
})*/
/*const isAuth = require('./helpers/isAuth')
//app.use(isAuth)
app.use('/about',isAuth)*/

//GET POST PUT DELETE ----------> ALL
app.get('/', (req, res) => res.send('Hello World!'))

const contact = require('./routers/contact')
app.use('/api/',contact)

const about = require('./routers/about')
app.use('/',about)

const user = require('./routers/user')
app.use('/',user)

app.use((err,req,res,next)=>{
    res.status(err.status);
    res.render('error.pug',{message:err.message,status:err.status})
})


>>>>>>> 83c4380886b16c2ca168d09c7313658e1813b636
app.listen(port, () => console.log(`Example app listening on port port!`))