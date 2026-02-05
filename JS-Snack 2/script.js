/* Ask two word to the user with prompt*/

const first_Word = prompt("Please write your message here, it must be the shortest...")

const second_Word = prompt("Please write your second message here, it must be the longest...")

/* console log the shortest one, and then the longhest */
if (first_Word.length<second_Word.length) {

    console.log(first_Word);
    console.log(second_Word);
    
    
    
}

else { 
  console.log("Sorry, you must respect the writing");
  
    
    
}