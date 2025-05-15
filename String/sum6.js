// 7. Count the Occurrences of a Character in a String
// Write a function that counts the number of occurrences of a character in a string.

// Example:

// countOccurrences("hello world", "o"); // Output: 2


function findOccurance(str,letter){
    
    let count=0;
    
    for(let i=0;i<str.length;i++){
        if(str[i]===letter){
            count++;
        }
    }
    
    console.log(count);
    
}findOccurance("hello world","o")