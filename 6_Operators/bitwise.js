/*
Bitwise Operators
JavaScript supports the following bitwise operators:
Assume variable A holds 2 and variable B holds 3, then:
S.No Operator and Description
1
& (Bitwise AND)
It performs a Boolean AND operation on each bit of its integer 
arguments.
Ex: (A & B) is 2.
2
| (BitWise OR)
It performs a Boolean OR operation on each bit of its integer 
arguments.
Ex: (A | B) is 3.
3
^ (Bitwise XOR)
It performs a Boolean exclusive OR operation on each bit of its integer 
arguments. Exclusive OR means that either operand one is true or 
operand two is true, but not both.
Ex: (A ^ B) is 1.
4
~ (Bitwise Not)
It is a unary operator and operates by reversing all the bits in the 
operand.
Ex: (~B) is -4.
5
<< (Left Shift)
It moves all the bits in its first operand to the left by the number of 
places specified in the second operand. New bits are filled with zeros. 
Shifting a value left by one position is equivalent to multiplying it by 2, 
shifting two positions is equivalent to multiplying by 4, and so on.
Ex: (A << 1) is 4.
6
>> (Right Shift)
Binary Right Shift Operator. The left operand’s value is moved right by 
the number of bits specified by the right operand.
Ex: (A >> 1) is 1.
7
>>> (Right shift with Zero)
This operator is just like the >> operator, except that the bits shifted
in on the left are always zero.
Ex: (A >>> 1) is 1.

*/

var a = 2;
var b = 3;
var linebreak = " <br />";

document.write(" (a & b ) => ");
result = (a & b);
document.write(result);
document.write(linebreak);

document.write(" (a | b ) => ");
result = (a | b);
document.write(result);
document.write(linebreak);

document.write(" (a ^ b ) => ");
result = (a ^ b);
document.write(result);
document.write(linebreak);


document.write(" ( ~b ) => ");
result = (~b);
document.write(result);
document.write(linebreak);

document.write(" (a << b ) => ");
result = (a << b);
document.write(result);
document.write(linebreak);

document.write(" (a >> b ) => ");
result = (a >> b);
document.write(result);
document.write(linebreak);


