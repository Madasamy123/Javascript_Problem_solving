// 6. Find the First Non-Repeated Character
// Write a function to find the first non-repeated character in a string
// firstNonRepeated("swiss"); // Output: "w"

function firstNonRepeat(str){
    
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i]!==str[j]){
                console.log(str[j]);
                return;
            }
          
        }
    }
    
}firstNonRepeat("swiss")