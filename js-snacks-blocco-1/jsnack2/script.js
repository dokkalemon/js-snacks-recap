/* JSnack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

//prompt
const word1 = prompt('inserisci la prima parola');
const word2 = prompt('inserisci la seconda pariola');


// riconoscimento parola
if (word1.length < word2.length) {
    document.body.innerHTML = `<h3>${word1}</h3<br><h3>${word2}</h3>`
    console.log(word1);
    console.log(word2);
} else if (word1.length > word2.length) {
    document.body.innerHTML = `<h3>${word2}</h3<br><h3>${word1}</h3>`
    console.log(word2);
    console.log(word1);
} else {
    document.body.innerHTML = `La parola ${word1} e la parole ${word2} sono di pari lunghezza!`
    console.log(`La parola ${word1} e la parole ${word2} sono di pari lunghezza!`)
    console.log(word1);
    console.log(word2);
}

