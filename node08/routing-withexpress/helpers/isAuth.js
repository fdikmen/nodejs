<<<<<<< HEAD
const isAuth = (req,middleRes,next)=>{
    const isAuthorized = false;
    if (isAuthorized) {
        next();
    } else {
        middleRes.send("You have no authority. Please login... From URL:"+req.url)
    }
}

=======
const isAuth = (req,middleRes,next)=>{
    const isAuthorized = false;
    if (isAuthorized) {
        next();
    } else {
        middleRes.send("You have no authority. Please login... From URL:"+req.url)
    }
}

>>>>>>> 83c4380886b16c2ca168d09c7313658e1813b636
module.exports = isAuth;