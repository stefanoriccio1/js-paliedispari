// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var scelta = prompt('Scegli pari o dispari?');
// console.log(scelta);

var numero = parseInt(prompt('indica un numero da 1 a 5'));
// console.log(numero);

var numeroCheck = (numero + randomGenerator(1, 10));
// console.log(numeroCheck);

if (scelta == 'pari' && isEven() == true){
 alert('hai vinto');
}
else if (scelta == 'dispari' && isEven()== false) {
  alert('hai vinto');
}
else {
  alert('hai perso');
}

// ------- funzioni
// random
function randomGenerator (min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  var random = Math.floor(Math.random() * (max - min + 1));
  return random;
}


// pari
function isEven (){
  if (numeroCheck % 2 == 0) {
    return true;
  }
  else{
    return false;
  }
}
console.log(isEven());
