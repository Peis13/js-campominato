//          FUNZIONI           //

// ----- STRINGA ----- //
// ROVESCIA STRINGA
// Ritorna una STRINGA
function rovescia(stringa) {
  var stringaReverse = '';

  // Giro contrario, partendo dall'ultima lettera
  // concateno ogni lettera in una nuova variabile di tipo striga
  for (var i = (stringa.length - 1); i >=0; i--) {
    stringaReverse += stringa[i];
  }

  return stringaReverse;
}

// VERIFICA PAROLA PALINDROMA
// Ritorna un valore BOOLEANO
function isPalindroma(stringa) {
  var risultato = false;

  if (stringa === rovescia(stringa)) {
    risultato = true;
  }

  return risultato;
}

// FRAZIONA LA STRINGA
// Ritorna un ARRAY
function fraziona(stringa) {
  var arrayStringa = [];

  // Pusho ogni lettera dentro un nuovo array
  for (var i = 0; i < stringa.length; i++) {
    arrayStringa.push(stringa[i]);
  }
  return arrayStringa;
}

// ROVESCIA ARRAY
// Ritorna una STRINGA
function rovesciaArray(stringa) {
  var stringaReverseArray = [];

  // Popolo l'array con ogni lettera della stringa
  var stringaArray = fraziona(stringa);

  // Pusho ogni lettera dell'array, partendo dalla fine, in un nuovo arrayReverse
  for (var i = (stringaArray.length - 1); i >= 0; i--) {
    stringaReverseArray.push(stringaArray[i]);
  }
  return stringaReverseArray.join('');
}
// ----- FINE STRINGA ----- //

// ----- NUMERO ----- //
// NUMERO CASUALE (Range)
// Ritorna un NUMERO
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// PARI O DISPARI
// Ritorna un BOOLEANO
function isEven(numero) {
  var boolean = false

  if (numero % 2 == 0) {
    boolean = true;
  }

  return boolean;
}
// ----- FINE NUMERO ----- //

// ----- ARRAY ----- //
// Genero N array con numeri casuali da 1 a 100
function nArray(num) {
  var num;
  var array = [];
  var listaArray = [];

  for (var i = 0; i < num; i++) {
    array = randomIntArrayLength(10, 1, 100);
    listaArray.push('<br>' + array);
  }
  return listaArray;
}

// Genero un array di lunghezza variabile
// contenente un range di numeri random NON RIPETUTI
function randomIntArrayLength(arrayLength, min, max) {
  var i = 0;
  var array = [];

  while (i < arrayLength) {

    var n = randomInt(min, max);
    if (!(array.includes(n))) {

      array.push(n);
      i++;
    }
  }
  return array;
}
// ----- FINE ARRAY ----- //

//          ANIMAZIONI           //
// ANIMAZIONE MENU ICON
function animBurger(bottone) {
  bottone.classList.toggle("change");
}

// ANIMAZIONE SIDE-MENU
// Apertura
function openNav(nav) {
  nav.classList.toggle("openW");
}

// Chiusura
function closeNav(nav) {
  nav.style.width = "0";
}

// ANIMAZIONE PROVINCE-MENU
// Apertura
function openPr(province) {
  province.classList.toggle("openH");
}

// Chiusura
function closePr(province) {
  province.style.height = "0";
}
// Rotazione
function rotateArrow(arrow) {
  arrow.classList.toggle("rotate");
}
