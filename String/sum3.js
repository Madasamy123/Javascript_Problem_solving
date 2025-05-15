// Input: "hello world"
// Output: "Hello World"

function firstLetterCapital(str){

 let first=str.split(" ");
 let result="";

 for(let i=0;i<first.length;i++){


    let second=first[i][0].toUpperCase()+first[i].slice(1);
    result+=second+" ";

 }

 console.log(result);

}firstLetterCapital("hello world india")
