/* Ask two word to the user with prompt*/

const first_Word = prompt("Please write your message here")

const second_Word = prompt("Please write your second message here")

/* console log the shortest one, and then the longhest */
if (first_Word.length<second_Word.length) {

    console.log(first_Word);
    console.log(second_Word);
    
    
    
}

else if(first_Word.length>second_Word.length) {

    console.log(second_Word);
    console.log(first_Word);
    
    
    

    
}

else {

    first_Word.length===second_Word.length

    console.log('The words have same length');
    


}



  
