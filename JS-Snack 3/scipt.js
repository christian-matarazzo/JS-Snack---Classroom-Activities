/* ask to the user FOR 10 times 1 number*/




let somma = 0


for(let i = 0; i < 10; i++)

    if ( i <= 10) {

        numero = Number(prompt(`inserisci il numero ${i + 1} di 10`))

        /* do the sum */

        somma += numero

    }

    console.log(`La somma totale di tutti i numeri inseriti è : ${somma}`);
    

