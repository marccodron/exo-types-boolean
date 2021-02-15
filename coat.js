// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = true
let isWindy = false
let isCold = true

if (isRainy || isWindy) {
  console.log('Get a coat')
} else {
  console.log('No need to wear a coat today')
}
if (isCold && isRainy) {
  console.log('Get a coat')
} else {
  console.log('No need to wear a coat today')
}