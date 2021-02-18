// v1 solution JS simple pour exprimer un XOR

let a = true
let b = false

if ((a && b) || (!a && b)) {
  console.log('TRUE')
} else {
  console.log('FALSE')
}

// v2 (a finir !)

if ((!a && b) || (a && b)) {
  console.log('TRUE')
} else {
  console.log('FALSE')
}

// solution avec une fonction XOR

function xor(a, b) {
  return (a || b) && !(a && b)
}

console.log(xor(a, b));
