// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime()); // 1618580000000
console.log(typeof getTime()); // number
console.log(getTime().toFixed(2)); // 1618580000000.00
