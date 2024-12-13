function foo(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);
  
  return a + b; // Now performs numeric addition
}

console.log(foo(1, '2')); // Output: 3

console.log(foo(1, 2)); //Output:3