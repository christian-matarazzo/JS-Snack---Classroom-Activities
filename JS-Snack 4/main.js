/* create an empty array for  */

let oddNumbers = []

for(let i = 0; i < 6 ; i++) {

    let numbers = prompt(`Inserisci il valore numero ${i + 1} di 6`)
   
    console.log(numbers);
    
    if (numbers % 2 !== 0) {

        oddNumbers.push(numbers)
    }
    
    
}

console.log(oddNumbers);

