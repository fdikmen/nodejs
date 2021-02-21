<<<<<<< HEAD
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug')
app.use(express.static('public'))
app.use(express.static('public2'))

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.render('index.pug'))
=======
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug')
app.use(express.static('public'))
app.use(express.static('public2'))

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.render('index.pug'))
>>>>>>> 83c4380886b16c2ca168d09c7313658e1813b636
app.listen(port, () => console.log(`Example app listening on port port!`))