<<<<<<< HEAD
const express = require('express')
const router = express.Router()


// OPTIONAL => ?
//router.get('/Cont?act', (req, res) => res.send('Contact World!'))
//router.get('/Co(nta)?ct', (req, res) => res.send('Contact World!'))
//router.get('/Con?t?a?ct', (req, res) => res.send('Contact World!'))
// ANY TEXT => *
//router.get('/Con*tact', (req, res) => res.send('Contact World!'))
// PLUS  => +
//router.get('/Conta+ct', (req, res) => res.send('Contact World!'))
// ? * +
router.get('/C?on+ta*ct', (req, res) => res.send('Contact World!'))


=======
const express = require('express')
const router = express.Router()


// OPTIONAL => ?
//router.get('/Cont?act', (req, res) => res.send('Contact World!'))
//router.get('/Co(nta)?ct', (req, res) => res.send('Contact World!'))
//router.get('/Con?t?a?ct', (req, res) => res.send('Contact World!'))
// ANY TEXT => *
//router.get('/Con*tact', (req, res) => res.send('Contact World!'))
// PLUS  => +
//router.get('/Conta+ct', (req, res) => res.send('Contact World!'))
// ? * +
router.get('/C?on+ta*ct', (req, res) => res.send('Contact World!'))


>>>>>>> 83c4380886b16c2ca168d09c7313658e1813b636
module.exports = router;