/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 20)
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = [
  {
    name: 'jurgen',
    surname: 'Vrapi',
    age: 26,
  },
]
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

for (let i = 0; i < me.length; i++) {
  delete me[i].age
}

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

for (let i = 0; i < me.length; i++) {
  me[i].skills = ['js', 'c++']
}

console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

for (let i = 0; i < me.length; i++) {
  let newSkill = 'java'
  me[i].skills.push(newSkill)
}
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

for (let i = 0; i < me.length; i++) {
  me[i].skills.pop()
}

console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  let random = Math.ceil(Math.random() * 6)
  return random
}

console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (num1, num2) {
  let biggest = 0
  if (num1 > num2) {
    biggest = num1
  } else {
    biggest = num2
  }

  return biggest
}

console.log(whoIsBigger(6, 8))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (string) {
  const splited = string.split(' ')
  return splited
}

console.log(splitMe('ciao il mio nome è marco'))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (string, bool) {
  let newString = ''
  if (bool === 'true') {
    newString = string.substring(1)
  } else newString = string.substring(0, string.length - 1)

  return newString
}

console.log(deleteOne('marco', 'false'))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(String) {
  var noNumbers = String.replace(/\d/g, '')

  return noNumbers
}

console.log(onlyLetters('I have 4 dogs'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(inputString) {
  // Utilizza una regular expression per verificare il formato dell'indirizzo email.
  var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Testa se la stringa soddisfa il formato dell'indirizzo email.
  return emailValid.test(inputString)
}

console.log(isThisAnEmail('jurgen@gmail.com'))
console.log(isThisAnEmail('jurgengamil.com'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  let dataCompleta = new Date().toDateString()
  let dataPlit = dataCompleta.split(' ')
  let dayOfWeek = dataPlit[0]
  return dayOfWeek
}

console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (xTimes) {
  const roll = { values: [] }
  let sum = 0
  for (let i = 0; i < xTimes; i++) {
    let x = dice()
    sum = sum + x
    console.log('numeri usciti:', x)
    roll.values[i] = x
  }
  roll.somma = sum
  return roll
}
console.log(rollTheDices(2))
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(inputDate) {
  const inputDateTime = new Date(inputDate)
  const currentDate = new Date()
  const difTime = currentDate - inputDateTime
  const differenza = Math.floor(difTime / (1000 * 60 * 60 * 24))
  return differenza
}

console.log(howManyDays('2023-12-07'))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(birthdate) {
  const currentDate = new Date()
  const birthDay = birthdate.getDate()
  const birthMonth = birthdate.getMonth()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth()

  return currentDay === birthDay && currentMonth === birthMonth
}
const myBirthdate = new Date('1997-03-03')
console.log(isTodayMyBirthday(myBirthdate))

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = function (object, prop) {
  for (let i = 0; i < object.length; i++) {
    delete object[i].prop
  }
  return object
}

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function (object) {
  let newest = 0
  let newestTitle
  for (let i = 0; i < object.length; i++) {
    if (parseInt(object[i].Year) > newest) {
      newest = object[i].Year
      newestTitle = object[i]
    }
    console.log(object[i].Year)
  }
  return newestTitle
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function (object) {
  let count = 0
  for (let i = 0; i < object.length; i++) {
    if (object[i].Type === 'movie') {
      count = count + 1
    }
  }

  return count
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const years = []
const onlyTheYears = function (object) {
  for (let i = 0; i < object.length; i++) {
    years.push(object[i].Year)
  }
  return years
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function (object) {
  let lastMil = 0
  for (let i = 0; i < object.length; i++) {
    if (parseInt(object[i].Year) < 2000 && parseInt(object[i].Year) > 1001) {
      lastMil = object[i]
      console.log(lastMil)
    }
  }
  return 'trovati'
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function (object) {
  let yearSum = 0
  for (let i = 0; i < object.length; i++) {
    yearSum = yearSum + parseInt(object[i].Year)
  }
  return yearSum
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (object, string) {
  const result = object.filter((y) => {
    const titleMin = y.Title.toLowerCase()
    const serchedMin = string.toLowerCase()

    return titleMin.includes(serchedMin)
  })

  return result
}
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const match = []
const unmatch = []
const searchAndDivide = function (object, string) {
  for (let i = 0; i < object.length; i++) {
    const titleMin = object[i].Title.toLowerCase()
    if (titleMin.includes(string.toLowerCase())) {
      match.push(object[i])
    } else {
      unmatch.push(object[i])
    }
  }
  console.log(match, unmatch)
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function (object, indexRemuve) {
  let newMoviesHead = object.slice(0, indexRemuve)

  let newMoviesTail = object.slice(indexRemuve + 1)

  const newMoviesRemoved = newMoviesHead.concat(newMoviesTail)

  return newMoviesRemoved
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const select = function () {
  let selected = document.getElementById('container')
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectTag = function () {
  let selected = document.getElementsByTagName('td')
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const stampTd = function () {
  let selected = document.getElementsByTagName('td')

  for (let i = 0; i < selected.length; i++) {
    console.log(selected[i].innerText)
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const bColor = function () {
  let selected = document.getElementsByTagName('a')
  for (let i = 0; i < selected.length; i++) {
    selected[i].style.background = 'red'
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addTd = function () {
  let newLista = document.createElement('li')
  document.getElementById('myList').appendChild(newLista)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyList = function () {
  const lista = document.getElementById('myList')
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild)
  }
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClass = function () {
  let selected = document.querySelectorAll('td')

  selected.forEach(function (tdElement) {
    tdElement.classList.add('test')
  })
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = function (numero) {
  for (let i = 1; i <= numero; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
      row += '*'
    }
    console.log(row)
  }
}

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = function (number) {
  for (let i = 1; i <= number; i++) {
    let empty = '.'.repeat(number - i)
    let full = '*'.repeat(2 * i - 1)
    console.log(empty + full)
  }
}

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = function (num) {
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// chiamate alle funzioni degli esecizi

// esercizio 11
console.log(deleteProp(movies, 'Poster'))

//esrcizio 12
console.log(newestMovie(movies))

//esercizio 13
console.log('ci sono n:' + countMovies(movies) + ' ' + 'film')

//eserciozio 14
console.log(onlyTheYears(movies))

//esercizio 15
onlyInLastMillennium(movies)

//esercizio 16
console.log(sumAllTheYears(movies))

//esercizio 17
console.log(searchByTitle(movies, 'avengers'))

//esercizo 18
searchAndDivide(movies, 'avenger')

//esercizo 19
console.log(removeIndex(movies, 3))

//esercizio 27
halfTree(5)

//esercizio 28
tree(8)

//esercizio 29
console.log(isItPrime(29))
console.log(isItPrime(4))
