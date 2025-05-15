// <!-- 9️⃣ Remove Duplicate Characters from a String:

// Input: "programming"
// Output: "progamin" -->


function removeDuplicateChar(str){
    
let obj={}
let result="";

for(let i=0;i<str.length;i++){
    if(obj[str[i]]){
        obj[str[i]]++
    }
    else{
        obj[str[i]]=1;
    }
}


for(let key in obj){
result+=key;

}

console.log(result);

}removeDuplicateChar("programming")