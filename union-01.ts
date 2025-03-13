function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}

printStatusCode(404);
printStatusCode('404');

/*
* this results in the equivalent to "overloading" a function in other languages
* the function can accept either a string or a number as an argument
*/