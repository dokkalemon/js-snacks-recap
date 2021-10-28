/* 
Generatore di "nomi cognomi" casuali:
prendendo una lista di nomi e una di cognomi, Gatsby vuole generare una falsa
lista di 3 invitati */

//creazione lista di nomi e cognomi
const nomi = ['Luigi', 'Pierfrancesco', 'Roberto', 'Francesco', 'Elena', 'Giorgio', 'Daniele', 'Christian',  'Alessandro', 'Lorenzo']
const cognomi = ['Rossi', 'Verdi', 'Bianchi', 'Neri', 'Azzurri', 'Simoni', 'Vieri', 'Signori', 'Chiellini', 'Barella'];



for (let i = 0; i <3; i++) {
    //numeri random
    const random1 = Math.floor(Math.random() * 10)
    const random2 = Math.floor(Math.random() * 10)

    //Stampiamo i Risultati
    document.body.innerHTML += ` ${nomi[random1]} ${cognomi[random1]} `
}
