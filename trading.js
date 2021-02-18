let PrixDuBTC = 70000 // en $
let PrixPourVendre = 60000
let PerixPourAchetez = 45000

if (PrixDuBTC < PerixPourAchetez) {
  console.log('Achetez du BTC')
}
else if (PrixDuBTC > PrixPourVendre) {
  console.log('Vendez du BTC')
} 
else {
console.log('Ne faites rien')
}
