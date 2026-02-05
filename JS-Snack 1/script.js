/* ask 2 numbers to the user */

let first_Number = Number(prompt('Please choose a number...'))
let second_Number = Number(prompt('Please choose another number...'))

/* Print the highest value */

if(first_Number<second_Number) {

    console.log(second_Number);
    
}
 
else if (first_Number>second_Number) {

    console.log(first_Number);
    
}
