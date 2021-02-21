<<<<<<< HEAD
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

=======
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

>>>>>>> 83c4380886b16c2ca168d09c7313658e1813b636
module.exports = router;