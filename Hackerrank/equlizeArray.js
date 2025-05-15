function equalizeArray(arr) {
    // Write your code here
    
   let obj={}
   let maxnum=0;
   
   for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++
    }
    else{
        obj[arr[i]]=1;
    }
    
   }
   
   for(let key in obj){
       if(obj[key]>maxnum){
           maxnum=obj[key]
       }
       
   }
   
  
   
   console.log(arr.length-maxnum)
   
  

}
equalizeArray([1,2,3,1,2,3,3,3])



// function equalizeArray(arr) {
//     // Write your code here
    
//    let obj={}
//    let maxnum=0;
   
//    for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]++
//     }
//     else{
//         obj[arr[i]]=1;
//     }
    
//     if(obj[arr[i]]>maxnum){
//     maxnum=obj[arr[i]]
//   }
    
    
//    }
   
//     return arr.length-maxnum;
// }
