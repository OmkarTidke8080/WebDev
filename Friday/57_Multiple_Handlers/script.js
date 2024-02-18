let p1 = new Promise((resolve, reject)=>{
    // alert("Hey I am resolved")

    setTimeout(() => {
        resolve(1)
    }, 2000);
})

p1.then(()=>
{
    console.log("Hurray")
})

p1.then( ()=>{
    console.log("Congratulations this promise is now resolved")
    return new Promise( (resolve,reject)=>{
        setTimeout(() => {
            resolve(3)
        }, 6000);
    })
}).then((value)=>{
    console.log(value)
})
