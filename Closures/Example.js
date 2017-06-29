outer = function() {
  var a = 1;
  var inner = function() {
    console.log(a);
  }
  return inner; // this returns a function
}

var fnc = outer(); // execute outer to get inner 
fnc();
/*
Defined is a function within a function. The variable a here is in scope for the inner function.
Normally when a function exits, all its local variables are blown away. 
However, if we return the inner function and assign it to a variable fnc, so that it persists after outer has exited,
all of the variables that were in scope when inner was defined also persist. 

Note that the variable 'a' is totally private to fnc. when I call fnc() it prints the value of a, which is "1". 
In a language without closure, the variable 'a' would have been garbage collected and thrown away when the function outer exited. 
Calling fnc would have thrown an error because 'a' .no longer exists.

'a' belongs to the scope of outer. The scope of inner has a parent pointer to the scope of outer. 
fnc is a variable which points to inner. 'a' persists as long as fnc persists. a is within the closure.
*/
