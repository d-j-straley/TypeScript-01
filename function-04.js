// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 5)); // 7
console.log(add(2, 5, 3)); // 10
