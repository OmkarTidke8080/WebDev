let a = [1,3,5,2,22]

// for loop
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

// for each loop
a.forEach((value,index,arr) => {
    console.log(value,index,arr)
});

// for in loop
let obj = {
    a:1,
    b:2,
    c:3
}

for(const key in obj)
{
   if(Object.hasOwnProperty.call(obj,key))
   {
    const element = obj[key];
    console.log(key,element);
   }
}


// for of loop

for (const iterator of a)
{
    console.log(iterator);
}

