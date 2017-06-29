**A closure is a persistent local variable scope<br>
A closure is a persistent scope which holds on to local variables(stack) even after the code execution has moved out of that block<br>**

*Closed expression*<br>

function closed(x) {<br>
  return x + 3;<br>
}<br>

*Open expression*<br>

function open(x) {<br>
  return x*y + 3;<br>
}<br>

*y is called a free variable as it not defined in this function. But can be defined in a bigger function enclosing this or it can be global *<br>

*Functions containing no free variables are called pure functions.*<br>
*Functions containing one or more free variables are called closures.*<br>

var pure = function pure(x){<br>
  return x <br>
  // only own environment is used<br>
}<br>

var foo = "bar"<br>

var closure = function closure(){<br>
  return foo <br>
  // foo is a free variable from the outer environment<br>
}<br>
