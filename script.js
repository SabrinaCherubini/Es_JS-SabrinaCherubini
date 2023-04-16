//Esercizio 1: Creare 5 variabili contenenti un numero, scrivere un programma in modo da ottenere la somma tra questi numeri e la media. -  In console deve uscire la seguente frase: ‘La somma tra i numeri equivale a … e la media risulta...’

let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 5;
let num5 = 5;

console.log('la somma dei numeri equivale a', num1+num2+num3+num4+num5 + ' e la media equivale a', num1+num2+num3+num4+num5/5) ;


// Esercizio 2:  Scrivi due variabili con l’anno corrente e l’anno di nascita, e stampa in console: -  l’età della persona, -  quanti anni sono necessari per raggiungere i 100 - e stampi in console la frase: “Hai 26 anni e ti mancano 74 anni per compierne 100

let date = 2023;
let birth = 1995;
let age = date-birth
let anni_mancanti = 100-age

console.log(date);
console.log(birth);
console.log('l età della persona', age);
console.log(' Hai', age + ' anni e ti mancano ', + anni_mancanti + ' anni per compierne ' +100);

//-  Esercizio 3: Scrivere un programma che dati: 
//-a) Un numero totale di gatti (44) 
//- b) Il numero dei gatti presenti in ogni fila (6)
//- Restituisca in output: 
//- Il numero di file risultanti 
// indicare il numero di gatti mancanti per completare una nuova fila
// Esempio: “Ci sono 7 file di gatti e ne mancano 4 per una nuova fila, con un avanzo di 2” 

let gatti = 44
let gattifila = 6
let fila = 44 / 6
let gattiavanzati = gatti % gattifila
let gattimancanti = gattifila - gattiavanzati


filagatti = Math.floor(fila)

console.log ('Ci sono', filagatti, 'file di gatti e ne mancano', gattimancanti,'per una nuova fila, con una avanzo di', gattiavanzati)






