// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var scelta = prompt('Scegli pari o dispari?');
console.log(scelta);

var numero = parseInt(prompt('indica un numero da 1 a 5'));
console.log(numero);

// var random = Math.floor(Math.random() * 10);
// console.log(random);

// if (scelta == 'pari' && ((numero + randomGenerator) % 2 ==0)){
//  console.log('hai vinto');
// }
// else if (scelta == 'dispari' && ((numero + randomGenerator) %2 != 0)) {
//   console.log('hai vinto');
// }
// else {
//   console.log('hai perso');
// }

var numeroCheck = (numero + parseInt(randomGenerator));
console.log(numeroCheck);


// ------- funzioni
// random
function randomGenerator (min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  var random = Math.floor(Math.random() * (max - min + 1));
  return random;
}
console.log(randomGenerator);

// pari
function isEven (){
  if (numero % 2 == 0) {
    return true;
  }
  else{
    return false;
  }
}
