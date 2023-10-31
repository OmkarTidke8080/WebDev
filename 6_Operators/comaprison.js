/*
Comparison Operators
JavaScript supports the following comparison operators: 
Assume variable A holds 10 and variable B holds 20, then:
S.No Operator and Description
1
== (Equal)
Checks if the value of two operands are equal or not, if yes, then 
the condition becomes true.
Ex: (A == B) is not true.
2
!= (Not Equal)
Checks if the value of two operands are equal or not, if the values 
are not equal, then the condition becomes true.
Ex: (A != B) is true.
3
> (Greater than)
Checks if the value of the left operand is greater than the value of 
Javascript
24
the right operand, if yes, then the condition becomes true.
Ex: (A > B) is not true.
4
< (Less than)
Checks if the value of the left operand is less than the value of 
the right operand, if yes, then the condition becomes true.
Ex: (A < B) is true.
5
>= (Greater than or Equal to)
Checks if the value of the left operand is greater than or equal to 
the value of the right operand, if yes, then the condition becomes 
true.
Ex: (A >= B) is not true.
6
<= (Less than or Equal to)
Checks if the value of the left operand is less than or equal to the 
value of the right operand, if yes, then the condition becomes 
true.
Ex: (A <= B) is true.

*/

var a = 10;
var b = 20;

var linebreak = " <br />";

document.write(" (a == b ) => ");
result = (a==b);
document.write(result);
document.write(linebreak);

document.write(" (a > b ) => ");
result = (a > b);
document.write(result);
document.write(linebreak);

document.write(" (a < b ) => ");
result = (a < b);
document.write(result);
document.write(linebreak);

document.write(" (a != b ) => ");
result = (a!=b);
document.write(result);
document.write(linebreak);

document.write(" (a >= b ) => ");
result = (a>=b);
document.write(result);
document.write(linebreak);

document.write(" (a <= b ) => ");
result = (a<=b);
document.write(result);
document.write(linebreak);



