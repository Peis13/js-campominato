// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla
// volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita
// termina, altrimenti si continua chiedendo all’utente un altro
// numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero
// consentito.
// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con
// difficoltà 2=> tra 1 e 50

// BOTTONI
var facile = document.getElementById('facile');
var medio = document.getElementById('medio');
var difficile = document.getElementById('difficile');
var gioca = document.getElementById('gioca');
var ricomincia = document.getElementById('ricomincia');
var ok = document.getElementById('ok');

// Chiedo all'utente che difficoltà vuole applicare al gioco
var difficoltaSelezionata = document.getElementById('difficolta-selezionata');
// Facile
facile.addEventListener('click',
  function() {
    difficoltaSelezionata.value = facile.value;
  }
)

// Medio
medio.addEventListener('click',
  function() {
    difficoltaSelezionata.value = medio.value;
  }
)

// Difficile
difficile.addEventListener('click',
  function() {
    difficoltaSelezionata.value = difficile.value;
  }
)

// OUTPUT
var errore = document.getElementById('errore');
var inserisciNumero = document.getElementById('inserisci-numero');
var quantitaBombe = 16;

// GIOCA
gioca.addEventListener('click',
  function() {

    var bombe = [];
    var numerInseriti = [];
    var rangeMin = 1;
    var rangeMax = '';
    var tentativiTotali = 0;
    var messaggio = '';
    errore.innerHTML = messaggio;
    inserisciNumero.classList.add('hidden');
    inserisciNumero.classList.remove('visible');

    // Chiedo all'utente quale difficoltà scegliere
    // in base alla scelta, imposto il limite massimo per generare numeri casuali
    switch (difficoltaSelezionata.value) {
      case 'Facile':
        rangeMax = 100;
        break;
      case 'Medio':
        rangeMax = 80;
        break;
      case 'Difficile':
        rangeMax = 50;
        break;
      default:
        messaggio = 'Seleziona un livello di difficoltà!';
    }

    // Controllo che l'utente abbia selezionato il livello di difficoltà
    if (isNaN(rangeMax)) {
      errore.innerHTML = messaggio;
    } else {

      // Il computer genera un array di 16 numeri casuali tra 1 e rangeMax.
      bombe = randomIntArrayLength(quantitaBombe, rangeMin, rangeMax);

      // Visualizza l'output
      inserisciNumero.classList.add('visible');
      inserisciNumero.classList.remove('hidden');
    }
    console.log(bombe);

    // OK
    ok.addEventListener('click',
    function() {

      var numero = document.getElementById('numero');
      var numeroInserito = parseInt(numero.value);
      var messaggio = '';
      errore.innerHTML = messaggio;
      tentativiTotali = (rangeMax - bombe.length);

      // Chiedo se il numero inserito è un numero valido
      // oppure se è compreso tra 1 e rangeMax
      if (isNaN(numeroInserito) || (numeroInserito > rangeMax) || (numeroInserito < 0)) {
        messaggio = 'Inserisci un numero tra 1 e ' + rangeMax;
        errore.innerHTML = messaggio;

        // Altrimenti se l'array bombe include il numeroInserito
      } else if (bombe.includes(numeroInserito)) {
        messaggio = 'HAI PERSO!' + '<br>Il numero ' + numeroInserito + ' era una mina' + '<br>Ritenta';
        errore.innerHTML = messaggio;
        difficoltaSelezionata.value = '';

        // Altrimenti se il numeroInserito è già stato già provato in precedenza
      } else if (numerInseriti.includes(numeroInserito)) {
        messaggio = 'Questo numero (' + numeroInserito + ') è già stato inserito' + '<br>Prova con un altro numero';
        errore.innerHTML = messaggio;

        // Altrimenti se i numerInseriti sono inferiori dei tentativi totali
      } else if (numerInseriti.length < tentativiTotali) {
        numerInseriti.push(numeroInserito);
        console.log('array numerInseriti: ' + numerInseriti);

        // Altrimenti se la quantità di numeri inseriti è uguale ai tentativiTotali
      } else if (numerInseriti.length == tentativiTotali) {
        messaggio = 'COMPLIMENTI HAI VINTO!!!'
        errore.innerHTML = messaggio;
      }
      numero.value = '';
    }
  )
  }
)


// RICOMINCIA
ricomincia.addEventListener('click',
function() {

  bombe = [];
  numerInseriti = [];
  numero.value = '';
  inserisciNumero.classList.add('hidden');
  inserisciNumero.classList.remove('visible');
  difficoltaSelezionata.value = '';
  var messaggio = '';
  errore.innerHTML = messaggio;
}
)

// Genero un array di lunghezza variabile
// contenente un range di numeri random
function randomIntArrayLength(arrayLength, min, max) {

  var i = 0;
  var array = [];

  while (i < arrayLength) {

    var n = randomInt(min, max);
    if (array.includes(n)) {

    } else {
      array.push(n);
      i++;
    }
  }
  return array;
}
