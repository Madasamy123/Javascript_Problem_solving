// 7️⃣ Find the Longest Word in a Sentence:

// Input: "I love programming"
// Output: "programming"

function longestWord(str){

    let result=""
    let first=str.split(" ");

  for(let i=0;i<first.length;i++){
    if(result.length<first[i].length){
        result=first[i];
    }

  }

  console.log(result);

}longestWord("I love programming")