let x = function(event) {

    console.log(event.target)
    console.log(event.type, event.clientX, event.typeY)
    

    console.log()

    // alert("Hello world 1")
}

let y = function(e) {
    alert("Hello world 2")
}

btn.addEventListener('click', x)
// btn.addEventListener('click', y)



// btn.addEventListener('click', function(e){
//     alert("Hello world 1")
// })

// btn.addEventListener('click', function(e){
//     alert("Hello world 2")
// })

// let a = prompt("What is your favorite number ? ");
// if(a == "2")
// {
//     btn.removeEventListener('click', x)
// }
