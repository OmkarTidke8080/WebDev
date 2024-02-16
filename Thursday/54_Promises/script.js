 let promise = new Promise(function(resolve, rejet){

    alert("Hello")
    resolve(56)

 })


console.log("Hello one")

setTimeout(function(){
    console.log("Hello  two in 2 seconds")
},2000)

console.log("My name is "+" Hello three");
console.log(promise)


// fetch google home page ==> console.log("google.com homepage done")
// fetch data from the data api
// ftech pictures from the server
// print downloading
// rest of the script