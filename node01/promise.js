const viewNumber = (condition) => {
    return new Promise((resolve,reject)=>{
        if (condition < 6) {
            resolve("Test");
        } else {
            reject("Not Nice.");
        }
    })
}

viewNumber(10)
    .then((data)=>{console.log(data);    return 2;})
    .then((data)=>{console.log(data);    return 4;})
    .then((data)=>{console.log(data);    return 6;})
    .then((data)=>{console.log(data);    return 8;})
    .then((data)=>{console.log(data);    return 10;})
    .catch((err)=>{console.log(err)})