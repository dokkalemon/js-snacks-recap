/*  Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti con for
 e opzionalmente con while (edited)  */



//variabile del risultato
let tot = 0;

for (let i = 0; i < 5; i++) {
    //chiediamo i numeri all'utente
    const numero = parseInt( prompt('Inserisci un numero'));

    //sommiamo i numeri
    tot+= numero

}

//stampiamo il messaggio
document.body.innerHTML = `<h3>la somma di tutti i numeri è ${tot}</h3>`