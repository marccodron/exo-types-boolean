let isHigher = true
let isLower = false
let isFarther = false

if (isHigher || isLower)   // --> true
if (isHigher || isFarther) // --> true
if (isLower || isFarther) // --> false
{
  console.log(`Don't scrap`)
}
else {
  console.log('You can scrap it')
}