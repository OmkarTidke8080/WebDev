
let a = [1,2,3]

/*
 a.map((value) => {
    console.log(value)
 })
 //console.log(a)
*/

let b = a.map((value,index,Array) => {
    console.log(value,index,Array);
    return value + 1;
})

console.log(b);