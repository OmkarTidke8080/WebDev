
const createTodo = async () => {
let options = {
    method:"POST",
    headers : {"content-type":"application/json"},
    body:JSON.stringify({
        title:'foo',
        body:'bhai',
        userId:1,
    }),
}

let p = await fetch('https://jsonplaceholder.typicode.com/posts',options)
// .then((respone)=> respone.json())
// .then((json)=>console.log(json));

let response = await p.json()
return response

}

const mainFunc =  async () =>{
    let todo = createTodo()
    console.log(todo)
}

mainFunc()