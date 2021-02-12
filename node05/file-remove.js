const fs = require('fs')

fs.unlink(fileName,(err)=>{
    if (err) {
        throw err;
    }
    console.log("File was deleted.");
})