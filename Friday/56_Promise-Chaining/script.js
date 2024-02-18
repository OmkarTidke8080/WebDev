// let p1 = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         console.log("Resolvved after 2 second")
//         resolve(56)
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 =  new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 2")
//         },2000)
//         resolve("Promise P2")
//     })

//     return p2;
// }).then((value)=>{
//     console.log("We are done")
//     return 2
// }).then((value)=>{
//     console.log("Now  we are done")
// })

// loadscript function

const loadScript = ()=>{
    return new Promise((resolve,reject) => {
    let script = document.createElement("script")
    script.type = "text/javaScript"
    script.src = src
    document.body.appendChild(script)
    script.onload = ()=>
    {
       resolve("script has been loaded")
    }
    script.onerror = ()=> {reject(0)}

})
}


let p1 = loadScript("http://localhost:3000/script.js")
p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("We are haiving problems")
})
