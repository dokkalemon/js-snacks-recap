/* Ogni volta che si clicca un bottone, il nostro programma chiederà 
un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma 
calcolerà la somma e le media di tutte le cifre che lo compongono
 stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento
  finché non avrà inserito un numero corretto. */

  const button = document.querySelector('.button');

  let numero = '';
  let somma = 0;
  let media = 0;

  button.addEventListener('click', function() {

    numero = prompt('inserisci il numero');

    while (numero.length != 4) {
        alert('inserisci un numero di 4 cifre')
        numero = prompt('inserisci il numero');
    };

    for (let i = 0; i < numero.length; i++) {
        console.log(numero[i])

        somma += parseInt(numero[i]);

    }

    document.body.innerHTML += `<br><h3>La somma dei tuoi numeri è ${somma}`;

    media = somma / numero.length

    document.body.innerHTML += `<br><h3>La media dei tuoi numeri è ${media}`;

  })


