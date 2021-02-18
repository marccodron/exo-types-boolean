// exemple 
let isRainy = true
let clothes = ''  // mutable
let temperature = 16 // in °C

if (isRainy) {
  clothes += 'umbrella, ' // concat string
}
if (temperature < 11) {
  clothes += 'Winter jacket, '
} else if (temperature >= 11 && temperature <= 3) {
  clothes += 'Coat, '
} else if (temperature >= 14 && temperature <= 22) {
  clothes += 'T-shirt, '
} else if (temperature >= 25) {
  clothes += 'Shorts, '
}
console.log(`You should wear : ${clothes}`)