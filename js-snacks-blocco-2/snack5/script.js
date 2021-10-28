/* Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi casuali all’array che ha meno elementi,
 fino a quando ne avrà tanti quanti l’altro */


//creazione degli array
 const array1 = ['item', 'item', 'item', 'item', 'item', 'item']
 const array2 = ['item', 'item', 'item',]


console.log(array1.length); // TODO:å
console.log(array2.length); // TODO:

let parametro = 0;

if (array1.length > array2.length) {
    parametro = array1.length - array2.length;
} else {
    parametro = array2.length - array1.length;
}

console.log(parametro)

for (let i = 0; i < parametro; i++) {

    const item = 'item';

    if (array1.length > array2.length) {
        array2.push(item)
    } else {
        array1.push(item)
    }

}

console.log(array1);
console.log(array2);
