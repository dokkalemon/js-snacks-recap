/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array */


//creiamo l'array vuoto
const array= [];

for (let i = 0; i < 6; i++) {

    //chiediamo all'utente un numero
    const numero = parseInt( prompt('Inserisci un Numero') );

    if (numero % 2 != 0 ){
        array.push(numero)
    }

}

document.body.innerHTML += `<h3>i numeri dispari sono ${array}</h3>`