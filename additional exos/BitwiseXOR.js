const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
// expected output: 6

console.log(a - b); // expected output: 2
console.log(a + b); // expected output: 8
console.log(a * b); // expected output: 15
console.log(a / b); // expected output: 1.66