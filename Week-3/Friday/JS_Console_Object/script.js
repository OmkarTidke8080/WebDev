console.log("HEllo WOrld")
// return value of console is undefined

 console.error("This is error")
// Errors in concole gets displyed in red
// we can see error messages in separate window


console.assert(5 > 5)
// if the assertion in the bracket gets failed then it shows error as assrtion failed

console.clear()
// console gets clear like clear screen in terminal

obj = {a:1, b:2, c:3}

console.table(obj)
// table gets created of above Object


console.warn("Hey please drink soda")
// Its displays warning in console in yellow background

console.info("Hey this is an important info")
// console.log and console.info gets displayed in same section

// chekc time of for loop using console.time

console.time("For_loop")
for(let i = 0; i < 5; i++)
{
    console.log(23)
}

console.timeEnd("For_loop")

// time for while loop
console.time("whileloop")
let i = 0;
while(i < 5)
{
    console.log(233)
    i++;
}

console.timeEnd("whileloop")