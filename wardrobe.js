let isRainy = true
let isSunny = false
let isCold = true
let temperature = 10
let clothes = ''

if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}

if (temperature < 15) {
  clothes += 'coat, '
}

if (isCold) {
  clothes += 'gloves, '
} 

else if (isSunny) {
  clothes += 'sunglasses, '
} 

if (temperature >= 15 && temperature <= 20) {
  clothes += 'sweater, '
} 

else {
  clothes += 't-shirt, '
}
console.log(`Je vous recommande de porter: ${clothes}`)