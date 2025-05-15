// 🔹 2. Longest Substring Without Repeating Characters
// Problem: Find the length of the longest substring without repeating characters.

// Example:

// pgsql
// Copy
// Edit
// Input: "abcabcbb"
// Output: 3    // The substring is "abc"


function longSubStr(s){

    let str="";
    let count=0;

    for(let i=0;i<s.length;i++){
        let subStr="";
        subStr+=s[i];

        for(let j=i+1;j<s.length;j++){

            if(!subStr.includes(s[j])){
                subStr+=s[j]
            }
            else{
                break;
            }
        }
         if(count<subStr.length){
           count=subStr.length;
            str=subStr
        }

     
      

    }

    
    console.log(str)

}longSubStr("geeksforgeeks")