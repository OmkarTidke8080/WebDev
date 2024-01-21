function onePlus(x,y)
{
    return 1+(x+y)/2;
}
const hello = ()=>
{
  console.log("HII");
}

// arrow fucntion

const sum = (p,q)=>{
    return p+q;
}
let a = 1;
let b = 2;
let c = 3;

console.log("AVerge is : ",onePlus(a,b));
console.log("AVerge is : ",onePlus(b,c));
console.log("AVerge is : ",onePlus(c,a));

console.log(sum(10,4));
hello();