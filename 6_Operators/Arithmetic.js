/*
What is an Operator?
Let us take a simple expression 4 + 5 is equal to 9. Here 4 and 5 are called 
operands and ‘+’ is called the operator. JavaScript supports the following 
types of operators.
 Arithmetic Operators
 Comparison Operators
 Logical (or Relational) Operators
 Assignment Operators
 Conditional (or ternary) Operators
*/

var  a = 33;
var b = 10;
var c = "Test";

var linebreak = "<br />";


document.write("a + b = ");
result = a + b;
document.write(result);
document.write(linebreak);

document.write("a - b = ");
result = a - b;
document.write(result);
document.write(linebreak);

document.write("a * b = ");
result = a * b;
document.write(result);
document.write(linebreak);

document.write("a / b = ");
result = a / b;
document.write(result);
document.write(linebreak);

document.write("a % b = ");
result = a % b;
document.write(result);
document.write(linebreak);

document.write("a +  b  + c = ");
result = a + b + c;
document.write(result);
document.write(linebreak);

a = a++;
document.write("a++ = ");
result = a++;
document.write(linebreak);

b = b--;
document.write("b-- = ");
document.write(result);
document.write(linebreak);


