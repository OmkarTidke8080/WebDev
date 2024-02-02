// Write a program to find mean of 5 numbers

var obj = [2,4,1,4,6]
var sum = 0

for(let i = 0; i < obj.length; i++)
{
  sum = sum + obj[i];
}

var mean = sum / 5;

console.log(mean);