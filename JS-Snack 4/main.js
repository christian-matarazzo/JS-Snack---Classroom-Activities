/* create an empty array for oddNumbers  */

let oddNumbers = []

for(let i = 0; i < 6 ; i++) {
/* ask 6 numbers */
    let numbers = prompt(`Inserisci il valore numero ${i + 1} di 6`)
   
    console.log(numbers);
    /* if they are odd push in the array */
    if (numbers % 2 !== 0) {

        oddNumbers.push(numbers)
    }
    
    
}
/* log the array */
console.log(oddNumbers);

