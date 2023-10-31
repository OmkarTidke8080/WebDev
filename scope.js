/*
Global Variables: A global variable has global scope which means it can 
be defined anywhere in your JavaScript code
*/

var myVar1 = "global";  // declaring a global variable


/*  Local Variables: A local variable will be visible only within a function 
where it is defined. Function parameters are always local to that function
*/
function checkScope()
{
    var myVar = "local";
    document.write(myVar);
    document.write(myVar1);
}

checkScope();
