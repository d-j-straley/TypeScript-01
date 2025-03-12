const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};

console.log(nameAgeMap); // { Alice: 21, Bob: 25 }
// The `Record` utility type creates an object type with keys of type K and values of type T. In this example, the nameAgeMap object has keys of type string and values of type number. The output is { Alice: 21, Bob: 25 }.
