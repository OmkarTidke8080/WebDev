var obj = 
{
  harry : 98,ratan : 70,Akash : 7
}

for(let a in obj)
{
    console.log( `${a} : `+ obj[a]);
}

// second method
for(let i = 0; i < Object.keys(obj).length; i++)
{
    console.log("The marks of "+Object.keys(obj)[i] + " are : " + obj[Object.keys(obj)[i]])
}