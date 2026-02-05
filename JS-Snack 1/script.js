/* ask 2 numbers to the user */

let first_Number = Number(prompt('Please choose a number...'))
let second_Number = Number(prompt('Please choose another number...'))

/* Print the highest value */

if(first_Number<second_Number) {

    console.log(`The highest value is : ${second_Number}`);
    
}

else if (first_Number=second_Number){

    console.log(`The numbers are equals, retry`);
    
}
 
else if (first_Number>second_Number) {

    console.log(`The highest value is : ${first_Number}`);
    
}
