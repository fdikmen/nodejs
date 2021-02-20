const express = require('express')
const router = express.Router()


router.get('/User/:id?/:jobId',(req,res)=>{res.send("Id="+req.params.id+" JobId="+req.params.jobId)})
router.post('/user',(req,res,next)=>{
    const user=false;
    if (user) {
        res.send("User Page... (From Post Method)")
    } else {
        return next({status:404,message:'This user was not found!'})
    }
    });

module.exports = router;