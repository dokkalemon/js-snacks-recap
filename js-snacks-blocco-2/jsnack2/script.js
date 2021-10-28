/* 
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo */



for (let i = 0; i < 10; i++) {
    //Chiediamo il numero all'utente
    let numero = parseInt( prompt('Inserisci il numero') );

    //se il numero è pari stampa il numero
    if (numero % 2 == 0) {
        document.body.innerHTML += `<h3>${numero}</h3>`;
    } else {
        //se il numero è dispari aggiungi di 1;
        numero += 1;
        document.body.innerHTML += `<h3>${numero}</h3>`;
    }
}