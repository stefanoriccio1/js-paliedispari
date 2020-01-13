
var parolaUtente = prompt ('inserisci una parola');

var parolaGirata = rovesciaParola(parolaUtente);
console.log(parolaGirata);

if (parolaGirata == parolaUtente){
  alert ('è palindroma');
}
else{
alert ('non è palindroma');
}


function rovesciaParola(parolaf){
  var parolaReverse = '';

  for (var i = parolaf.length - 1; i >=0; i--){
    parolaReverse += parolaf [i];
  }
  return parolaReverse;
}
