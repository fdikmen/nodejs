const express = require('express')
const router = express.Router()


router.get('/User/:id?/:jobId',(req,res)=>{res.send("Id="+req.params.id+" JobId="+req.params.jobId)})
router.post('/User',(req,res)=>{res.send("Hello world from USER POST Method...")})

module.exports = router;