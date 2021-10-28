/* 
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari */


//array vuoto
let array = []

let tot = 0;


//inseriamo numeri random nell'array
for (let i = 0; i < 10; i++) {
    //generiamo numeri random
    const random = Math.floor(Math.random() * 100 + 1);

    // inseriamo i numeri nell'array
    array.push(random)

    if (array.length % 2 === 0) {
        tot += array[i]
    }
}

console.log(array)
document.body.innerHTML = `<h3>Il risultato della somma dei numeri dispari è ${tot}</h3>`


