// Input: s = "abacdabcdef"  


function longestSubString(input){
  
     let str=""
     let count=0;
    for(let i=0;i<input.length;i++){
        let subStr="";
        subStr+=input[i];

        for(let j=i+1;j<input.length;j++){
            if(!subStr.includes(input[j])){
                subStr+=input[j];
              
            }
            else{
                break;
            }
        }

        if(count<subStr.length){
            count=subStr.length;
            str=subStr;
        }
      

    }

    console.log(str)
  

}longestSubString("abcdefghijklmnopqrstuvwxyz")