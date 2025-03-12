// the `?` operator here marks parameter `c` as optional
//note the following syntax: (c || 0) in the function body
//this is a way to provide a default value for the parameter `c` if it is not provided by the caller
//if `c` is not provided, then it will be `undefined` and `undefined` is falsy in JavaScript
//so, `c || 0` will return `0` if `c` is not provided
//this is a common way to provide default values in JavaScript

function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

console.log(add(2,5)); // 7
console.log(add(2, 5, 3)); // 10
