console.log("Video-4 Primitive and Objects");

/* Seven primitive dattaypes

1. Null  2. Number 3. String 4. Symbol  5.Undefined  6. Boolean  7. bigInt 

*/

let a = null; // nu;;
let b = 345; // number
let c = true; // boolean
let d = BigInt("567") + BigInt("5265"); // bigInt
let e = "Omkar"; // string
let f = Symbol("I am a nice symbol"); // Symbol
let g = undefined; // undefined

console.log(a, b, c, d, e, f, g);

console.log(typeof d);


// Objects - Key value pairs

const item = {
  "Omkar" : true,
  "Shubh" : false,
  "Lovsih": 65
  
} 

console.log(item["Lovsih"]);