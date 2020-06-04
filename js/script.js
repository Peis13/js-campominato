// All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

// INPUT
// Chiedo all'utente di scegliere il livello di difficoltà
var difficolta = parseInt(prompt('Scegli il livello di difficoltà da 0 a 2'));
var rangeMax = 100;
var numerInseriti = [];

// OUTPUT
var messaggioRisultato = 'COMPLIMENTI HAI VINTO';
var stampaRisultato = document.getElementById('risultato');
var stampaPunteggio = document.getElementById('punteggio');
var stampaTentativiRimasti = document.getElementById('rimasti');
var stampaNumerInseriti = document.getElementById('inseriti');
var stampaBombe = document.getElementById('bombe');

// Se non ha inserito un valore accettabile,
// chiedo all'utente un numero finchè non inserisce un valore corretto
var i = 0;
while ((isNaN(difficolta)) || (difficolta < 0) || (difficolta > 2)) {

  difficolta = parseInt(prompt('Ti ho detto da 0 a 2!'));
  i++;
}

// A questo punto l'utente ha inserito un valore corretto
// quindi imposto il range massimo di numeri casuali per generare l'array di bombe
switch (difficolta) {
  case 1:
    rangeMax = 80;
    break;
  case 2:
    rangeMax = 50;
    break;
}
// console.log('Range massimo: ' + rangeMax);

// genero l'array di 16 bombe con numeri casuali da 1 a rangeMax
var bombe = generaBombe(16, 1, rangeMax);
// console.log('Array bombe: ' + bombe);

// imposto il limite di numeri che l'utente può inserire per poter vincere
var tentativiVittoria = rangeMax - bombe.length;
// console.log('tentativi vittoria: ' + tentativiVittoria);

// Creo una valiabile booleana
// per poter uscire dal ciclo while quando l'utente perde
var vittoria = true;

// chiedo all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100
// tante volte quante sono le possibilità per poter vincere
// Se il numero inserito è presente nell'array di bombe, l'utente ha perso
// altrimenti ogni numero inserito lo salvo dentro un array
var totaleNumerInseriti = 0;  // questa variabile la utilizzo come contatore
// console.log('Totale numeri inseriti: ' + totaleNumerInseriti);
while ((vittoria == true) && (totaleNumerInseriti < tentativiVittoria)) { //// NOTE: : sostituisci tentativiVittoria con un numero per fare debug

  var numero = parseInt(prompt('Inserisci un numero da 1 a ' + rangeMax + '. Fin\'ora hai inserito: ' + numerInseriti));
  // console.log('Hai appena inserito: ' + numero);

  // Validazione:
  // se il numero inserito non è un numero
  // oppure se il numero non è compreso tra 1 e rangeMax
  // chiedo di nuovo l'inserimento del numero
  // fino all'inserimento di un numero valido
  while ((isNaN(numero)) || (numero < 1) || (numero > rangeMax)) {

    alert('Sono consentiti solo numeri da 1 a ' + rangeMax);
    numero = parseInt(prompt('Inserisci un numero da 1 a ' + rangeMax));
  }

  // Validazione:
  // se il numero inserito è già stato inserito precedentemente
  // ricomincia il ciclo senza incrementare il contatore del ciclo
  // altrimenti prosegui il ciclo
  if (numerInseriti.includes(numero)) {

    alert(numero + ' è già stato inserito precedentemente, prova con un altro numero');
  } else {

    // Validazione:
    // se il numero inserito è incluso nell'array delle bombe HAI PERSO!
    // altrimenti aggiungi il numero nell'array numerInseriti
    if (bombe.includes(numero)) {

      vittoria = false;
      messaggioRisultato = 'BOOOOOM HAI PERSO!';
    } else {

      numerInseriti.push(numero);
      // console.log('Lista numeri inseriti: ' + numerInseriti);
      tentativiVittoria -= 1;
      // console.log('Tentativi rimasti: ' + tentativiVittoria);
    }

  }
  totaleNumerInseriti = numerInseriti.length; //questo è l'incremento del ciclo while
  // console.log('Totale numeri inseriti: ' + totaleNumerInseriti);
}

// Inizializzo i messaggi per ogni dettaglio partita
var messaggioTentativiRimasti = 'Ti mancavano ' + tentativiVittoria + ' tentativi';
var messaggioPunteggio = 'Punteggio: ' + totaleNumerInseriti;
var messaggioNumerInseriti = 'La tua rovina: ' + numero;
var messaggioBombe = 'Queste sono le bombe che dovevi evitare: ' + bombe;

// Incaso di vittoria, ometti i messaggi dei tentativi rimasti e di numero-miccia
if (vittoria) {

  messaggioTentativiRimasti = '';
  messaggioNumerInseriti = '';
  messaggioBombe = 'Queste sono le bombe che hai evitato: ' + bombe;
}

// Stampa dei dettagli partita in base al risultato
stampaRisultato.innerHTML = messaggioRisultato;
stampaPunteggio.innerHTML = messaggioPunteggio;
stampaTentativiRimasti.innerHTML = messaggioTentativiRimasti;
stampaNumerInseriti.innerHTML = messaggioNumerInseriti;
stampaBombe.innerHTML = messaggioBombe;
// console.log(messaggioRisultato);

//          FUNZIONI           //
// Genero un array di lunghezza variabile (nBombe)
// contenente un range di numeri random NON RIPETUTI (min, max)
// return: array
function generaBombe(nBombe, min, max) {
  var i = 0;
  var array = [];

  while (i < nBombe) {
    var n = randomInt(min, max);

    if (!(array.includes(n))) {
      array.push(n);
      i++;
    }
  }
  return array;
}
