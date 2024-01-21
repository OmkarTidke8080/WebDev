let arr = [1,13,4,3,11];
let newArr = []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element *2)
}

console.log(newArr);

// easy way

let newArr1 = arr.map((e)=>
{
  return e*2
})

console.log(newArr1)

// filter

const greaterThanSeven = (e)=>
{
    if(e>7)
    {
        return true;
    }
    return false;
}

console.log(newArr1.filter(greaterThanSeven));

// reduce function

let arr2 = [1,2,3,4,5];

const red = (a,b)=>{
    return a*b;
}

console.log(arr2.reduce(red));