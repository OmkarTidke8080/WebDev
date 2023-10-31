/*
Conditional Operator (? :)
The conditional operator first evaluates an expression for a true or false value 
and then executes one of the two given statements depending upon the result of 
the evaluation.
S.No Operator and Description
1
? : (Conditional )
If Condition is true? Then value X : Otherwise value Y

*/

var a = 10;
var b = 20;
var linebreak = " <br />";

document.write("((a > b ) ? 100 :200) => ");
result = (a > b) ? 100 : 200;
document.write(result);
document.write(linebreak);

document.write(" (( a < b ) ? 100 : 200)  => ");
result = (a < b) ? 100 : 200;
document.write(result);
document.write(linebreak);
